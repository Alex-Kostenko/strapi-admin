import * as pdfjs from 'pdfjs-dist';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { useEffect, useState } from 'react';
import { Grid } from '@strapi/design-system';

import Card from '../components/Card';
import { request } from '../utils/request.service';
import { SimpleMenu } from '@strapi/design-system';
import { MenuItem } from '@strapi/design-system';

pdfjs.GlobalWorkerOptions.workerSrc =
  'https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js';

interface File {
  id: number;
  documentId: string;
  name: string;
  alternativeText: any;
  caption: any;
  width: any;
  height: any;
  formats: any;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface IReplay {
  id: number;
  documentId: string;
  name: string;
  email: string;
  message: string;
  state: 'read' | 'unread';
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  file: File;
}

export default function HomePage() {
  const [replays, setReplays] = useState<{ data: IReplay[] }>({ data: [] });
  const [filter, setFilter] = useState<string>('all');

  const changeFilter = (filter: string) => {
    setFilter(filter);
  };

  useEffect(() => {
    const getReplays = async () => {
      const res = await request.get<{ data: IReplay[] }>('/contact-uses?populate=file', {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setReplays(res);
    };

    getReplays();
  }, [filter]);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 56,
          width: '100%',
          padding: '10px 0 10px 20px',
          background: '#181826',
          zIndex: 10,
        }}
      >
        <SimpleMenu
          label={filter[0].toUpperCase() + filter.substring(1)}
          style={{
            width: 'fit-content',
          }}
        >
          <MenuItem onSelect={() => changeFilter('all')}>All</MenuItem>
          <MenuItem onSelect={() => changeFilter('read')}>Read</MenuItem>
          <MenuItem onSelect={() => changeFilter('unread')}>Unread</MenuItem>
        </SimpleMenu>
      </header>
      <div
        style={{
          width: '90%',
          margin: '56px auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
        }}
      >
        <Grid.Root gap={5}>
          {replays.data.length &&
            replays.data
              .filter((item) => (filter === 'all' ? item : item.state === filter))
              .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
              .map((rep) => (
                <Grid.Item key={rep.id} gap={5} col={3} m={4} s={6}>
                  <Card {...rep} pdfPath={rep.file.url}></Card>
                </Grid.Item>
              ))}
        </Grid.Root>
      </div>
    </>
  );
}
