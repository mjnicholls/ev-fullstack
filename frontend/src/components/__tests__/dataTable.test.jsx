import renderer from 'react-test-renderer';
import DataTable from '../dataTable'

test('matches snapshot', () => {
    const tree = renderer.create(<DataTable/>).toJSON();
    expect(tree).toMatchSnapshot()
})