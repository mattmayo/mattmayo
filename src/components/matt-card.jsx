import * as React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const MattCard = () => (
  <div>
    <Card>
      <CardContent>
        <Typography align={'center'} component="h3" variant="h3">
          mattmayo.com
        </Typography>
      </CardContent>
    </Card>
  </div>
);

export default MattCard;
