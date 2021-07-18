import {Fragment} from 'react';
import {Link} from 'react-router-dom';

import CenteredLayout from '../components/ui/CenteredLayout';
import VerticalLayout from '../components/ui/VerticalLayout';
import Icon from '../components/ui/Icon';
import Heading from '../components/typography/Heading';

function Home(): JSX.Element {
  return (
    <CenteredLayout>
      <VerticalLayout>
        <Fragment>
          <Icon src="https://media-exp1.licdn.com/dms/image/C560BAQG603N76hP7Uw/company-logo_200_200/0/1554832529017?e=2159024400&v=beta&t=Va2t2oVq5OUIVBiKiesXlwVQQInRJ54Z-zC68SZgNus" />
          <Heading
            className="text-5xl mt-4"
            as="h1"
            text="Welcome to Verbio's Bot"
          />
          <Link className="text-1xl mt-4" to="/login">
            <button className="text-white w-full py-2 rounded-md self-center text-1xl bg-pink-700 hover:bg-pink-800">
              Go to login
            </button>
          </Link>
        </Fragment>
      </VerticalLayout>
    </CenteredLayout>
  );
}

export default Home;
