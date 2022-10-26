import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem/TransactionItem';
import {TransactionTable, TransactionTitle} from './TransactionHistory.styled'


export default function TransactionHistory({ items }) {
    return (
        <TransactionTable>
            <thead>
                <tr>
                    <TransactionTitle>Type</TransactionTitle>
                    <TransactionTitle>Amount</TransactionTitle>
                    <TransactionTitle>Currency</TransactionTitle>
                </tr>
            </thead>

            <tbody>
                {
                    items.map(({ id, type, amount, currency }) =>(
                        <TransactionItem
                            key={id}
                            type={type}
                            amount={amount}
                            currency = {currency}
                        />
                ))}
            </tbody>
        </TransactionTable>
    );
};

TransactionHistory.propTypes = {
    item: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
}
