/** nous avons donc décidé que FilterableProductTable possèdera notre état.
 *  Tout d’abord, ajoutez une propriété d’instance
 *  this.state = {filterText: '', inStockOnly: false} dans le constructor
 *  de FilterableProductTable pour refléter l’état initial de votre application.
 *  Ensuite, passez filterText et inStockOnly à ProductTable et SearchBar via leurs props.
 *  Enfin, utilisez ces props pour filtrer les lignes 
 * dans ProductTable et définir les valeurs des champs du formulaire dans SearchBar. */
import SearchBar from './SearchBar'
import ProductTable from './ProductTable';
class FilterableProductTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        filterText: '',
        inStockOnly: false
      };
      
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
      this.handleInStockChange = this.handleInStockChange.bind(this);
    }
  /** Function de rappel pour acceder au state du composant enfant */
    handleFilterTextChange(filterText) {
      this.setState({
        filterText: filterText
      });
    }
    
    handleInStockChange(inStockOnly) {
      this.setState({
        inStockOnly: inStockOnly
      })
    }
  
    render() {
      return (
        <div>
          <SearchBar
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
            onFilterTextChange={this.handleFilterTextChange}
            onInStockChange={this.handleInStockChange}
          />
          <ProductTable
            products={this.props.products}
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
          />
        </div>
      );
    }
  }
  export default FilterableProductTable
  