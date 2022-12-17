// NOTE: Error when running Jest for testing, a configuration error?
// Unable to test these tests, but this snapshot method is my preferred for testing

import renderer from 'react-test-renderer';
import CreateUser from '../createUser'

test('matches snapshot', () => {
    const tree = renderer.create(<CreateUser/>).toJSON();
    expect(tree).toMatchSnapshot()
})