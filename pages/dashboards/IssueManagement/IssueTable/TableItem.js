import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
// import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
// import moment from "moment";
// import { Button, Link } from "@mui/material";
// import { approvedByFinancer, getBudgetListFinancer } from "redux/actions";
// import { useAuthUser } from "@crema/utility/AuthHooks";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:hover": {
        backgroundColor: theme.palette.action.hover,
        cursor: "pointer",
    },
}));

const StyledTableCell = styled(TableCell)(() => ({
    fontSize: 14,
    padding: 8,
    "&:first-of-type": {
        paddingLeft: 20,
    },
    "&:last-of-type": {
        paddingRight: 20,
    },
}));

const TableItem = () => {
    // const { user } = useAuthUser();
    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    return (
        <StyledTableRow key={`test`}>
            <StyledTableCell>test</StyledTableCell>
            <StyledTableCell>test</StyledTableCell>
            <StyledTableCell>test</StyledTableCell>
            <StyledTableCell> test</StyledTableCell>
            <StyledTableCell sx={{ textTransform: "capitalize" }}>
                test
            </StyledTableCell>
            <StyledTableCell>test</StyledTableCell>
        </StyledTableRow>
    );
};

export default TableItem;

// TableItem.propTypes = {
//     data: PropTypes.object.isRequired,
// };
