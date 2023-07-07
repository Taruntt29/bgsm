import React from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import PropTypes from 'prop-types';
import TableHeading from './TableHeading';
import TableItem from './TableItem';
import AppTableContainer from '@crema/core/AppTableContainer';
import TableItemEmpty from './TableItemEmpty';

const AppTable1 = ({data = []}) => {
  return (
    <AppTableContainer>
      <Table stickyHeader className='table'>
        <TableHead>
          <TableHeading data={data} />
        </TableHead>
        <TableBody>
          {data.length > 0 ? (
            data.map((data, index) => (
              <TableItem
                data={data}
                key={index}
              />
            ))
          ) : (
            <TableItemEmpty text={'No record found...'} />
          )}
        </TableBody>
      </Table>
    </AppTableContainer>
  );
};

export default AppTable1;

AppTable1.defaultProps = {
  data: [],
};

AppTable1.propTypes = {
  data: PropTypes.array,
};
