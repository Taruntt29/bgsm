import React from 'react';
import { TableCell } from '@mui/material';
import TableHeader from '@crema/core/AppTable/TableHeader';
import PropTypes from 'prop-types';

const TableHeading = ({ data }) => {
  let isPendingData = data.some(el => el.status === 'pending');
  return (
    <TableHeader>
      <TableCell>Note No.</TableCell>
      <TableCell>Initiator</TableCell>
      <TableCell>Creation date</TableCell>
      <TableCell>Amount</TableCell>
      <TableCell>Status</TableCell>
      {isPendingData &&
        <TableCell>Action</TableCell>
      }
    </TableHeader>
  );
};

export default TableHeading;

TableHeading.propTypes = {
  data: PropTypes.array.isRequired,
};
