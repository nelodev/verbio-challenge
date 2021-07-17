import {Fragment} from 'react';

import CenteredLayout from '../components/ui/CenteredLayout';
import VerticalLayout from '../components/ui/VerticalLayout';
import Icon from '../components/ui/Icon';
import Heading from '../components/typography/Heading';

function Home(): JSX.Element {
  return (
    <CenteredLayout>
      <VerticalLayout>
        <Fragment>
          <Icon
            className="self-center"
            src="https://media-exp1.licdn.com/dms/image/C560BAQG603N76hP7Uw/company-logo_200_200/0/1554832529017?e=2159024400&v=beta&t=Va2t2oVq5OUIVBiKiesXlwVQQInRJ54Z-zC68SZgNus"
          />
          <Heading
            className="text-5xl text-center"
            as="h1"
            text="Welcome to Verbio's Bot"
          />
          {/* <button onClick={() => history.push('/login')}>Go to login</button> */}
        </Fragment>
      </VerticalLayout>
    </CenteredLayout>
  );
}

export default Home;
