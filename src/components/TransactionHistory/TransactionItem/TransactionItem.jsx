import PropTypes from 'prop-types';
import {TransGrid, TransaBody} from '../TransactionItem/TransactionItem.styled'

export default function TransactionItem({type, amount, currency}) {
    return (
        <TransaBody>
            <TransGrid>{type}</TransGrid>
            <TransGrid>{amount}</TransGrid>
            <TransGrid>{currency}</TransGrid>
        </TransaBody>
    );
};


TransactionItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};
