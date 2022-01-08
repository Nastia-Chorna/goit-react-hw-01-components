import PropTypes from 'prop-types';
import {
  MainTable,
  Thead,
  Items,
ItemsContent

} from './transaction.styled';

function TransactionHistory({ items }) {
  return (
    
    <MainTable>
      <Thead>
        <tr>
          <Items>Type</Items>
          <Items>Amount</Items>
          <Items>Currency</Items>
        </tr>
      </Thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <ItemsContent>{item.type}</ItemsContent>
            <ItemsContent>{item.amount}</ItemsContent>
            <ItemsContent>{item.currency}</ItemsContent>
          </tr>
        ))}
      </tbody>
      </MainTable>
     
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;