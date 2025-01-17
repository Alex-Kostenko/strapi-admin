import { Checkbox } from '@strapi/design-system';
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  CardCheckbox,
  CardAction,
  CardAsset,
  CardTimer,
  CardContent,
  CardBadge,
  CardTitle,
  CardSubtitle,
  LinkButton,
} from '@strapi/design-system';

import { Link } from 'react-router-dom';
import { request } from '../utils/request.service';
import { Divider } from '@strapi/design-system';
import { useState } from 'react';

interface CardProps {
  name: string;
  email: string;
  message: string;
  documentId: string;
  createdAt: string;
  state: 'read' | 'unread';
  pdfPath: string;
}

const textStyle = {
  textOverflow: 'ellipsis',
  // width: 286,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  lineHeight: 1.5,
  maxHeight: 'calc(1.5em * 3)',
  overflow: 'hidden',
  WebkitLineClamp: '3',
};

const cardStyle = {
  width: '100%',
  height: 192,
  padding: '10px 0',
};

const contentStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: 166,
  width: '100%',
  gap: 5,
};

function formatDate(date: Date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}

const CardComponent = ({
  name,
  email,
  message,
  documentId,
  createdAt,
  state,
  pdfPath,
}: CardProps) => {
  const localeDate = formatDate(new Date(createdAt));

  const [read, setRead] = useState(state);

  const documentState = {
    name,
    email,
    message,
    fileName: pdfPath.substring(9),
  };

  const readDocument = () => {
    request.put('/contact-uses/' + documentId, {
      body: { data: { state: read !== 'read' ? 'read' : 'unread' } },
    });
  };

  return (
    <Card style={cardStyle}>
      <CardBody>
        <CardContent style={contentStyle}>
          <CardTitle>Name: {name}</CardTitle>
          <Divider />
          <CardTitle>Email: {email}</CardTitle>
          <Divider />
          <CardTitle style={textStyle}>Message: {message}</CardTitle>
          <Divider />

          <div
            style={{
              marginTop: 'auto',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 5,
              }}
            >
              <CardTitle>{localeDate}</CardTitle>
              <Checkbox
                checked={read === 'read' ? true : false}
                onCheckedChange={() => {
                  readDocument();
                  setRead((prev) => (prev === 'read' ? 'unread' : 'read'));
                }}
              >
                Checked
              </Checkbox>
            </div>
            <LinkButton
              style={{ width: '45%' }}
              tag={Link}
              to={'document/' + pdfPath.substring(9, pdfPath.length - 4)}
              state={documentState}
            >
              View more
            </LinkButton>
          </div>
          {/* <Checkbox /> */}
        </CardContent>
      </CardBody>
    </Card>
  );
};

export default CardComponent;
