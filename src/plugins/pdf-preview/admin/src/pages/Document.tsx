import { LoadError, SpecialZoomLevel, Viewer } from '@react-pdf-viewer/core';
import { LinkButton } from '@strapi/design-system';
import { Button } from '@strapi/design-system';
import { Typography } from '@strapi/design-system';
import { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import Modal from '../components/Modal';
import { Flex } from '@strapi/design-system';

const renderError = (error: LoadError, fileName: string) => {
  let message = '';
  switch (error.name) {
    case 'InvalidPDFException':
      message = 'The document is invalid or corrupted. ' + fileName;
      break;
    case 'MissingPDFException':
      message = 'The document is missing or not PDF. ' + fileName;
      break;
    case 'UnexpectedResponseException':
      message = 'Unexpected server response';
      break;
    default:
      message = 'Cannot load the document. ' + fileName;
      break;
  }

  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: '#250700',
          borderRadius: '0.25rem',
          color: '#fff',
          padding: '1rem 0.5rem',
          fontSize: 22,
        }}
      >
        {message}
      </div>
    </div>
  );
};

const Document = () => {
  const { path } = useParams();
  const { name, email, message, fileName } = useLocation().state;

  const [isDocumentOpen, setIsDocumentOpen] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        width: '90%',
        height: '100vh',
        padding: '20px 0',
        margin: '0 auto',
      }}
    >
      <Flex
        direction={{ initial: 'column', small: 'row' }}
        alignItems={'flex-start'}
        justifyContent={{ initial: 'space-between' }}
        gap={2}
      >
        <LinkButton style={{ width: 200, height: 30 }} tag={Link} to={'../'}>
          Back
        </LinkButton>
        <Button onClick={() => setIsDocumentOpen(true)}>View document</Button>
      </Flex>
      <Typography>Name: {name}</Typography>
      <Typography>Email: {email}</Typography>
      <Typography style={{ maxWidth: 700 }}>Message: {message}</Typography>
      <Modal isOpen={isDocumentOpen} onClose={() => setIsDocumentOpen(false)}>
        <Viewer
          fileUrl={`/uploads/${path}.pdf`}
          defaultScale={SpecialZoomLevel.PageFit}
          renderError={(err) => renderError(err, fileName)}
        />
      </Modal>
    </div>
  );
};

export default Document;
