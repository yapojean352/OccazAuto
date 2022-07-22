
import ProductRow from './ProductRow';

class ListProduct extends React.Component {
    render() {
    //   const filterText = this.props.filterText;
    //   const inStockOnly = this.props.inStockOnly;
  
    //   const rows = [];
    //   let lastCategory = null;
  
  
      return (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
  }
  export default ListProduct