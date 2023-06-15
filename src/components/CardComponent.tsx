import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IPost } from '../interfaces/IPost';

export default function CardComponent({ id, title, body }: IPost) {
  return (
    <div className='flex-col max-w-sm m-5'>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {id}
          </Typography>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2">
            {body}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}