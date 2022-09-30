import type { NextPage } from 'next';
import Image from 'next/image';

import { PageInterface } from '../interfaces';

import {
  Heading,
  Section,
  Container,
  Page,
  Button,
  CustomLink,
} from '../components/atomic-design/atoms/';

import { BannerContainer, ErrorText, ErrorContent } from '../styles/pages/error-styles';

interface Props {
  pages: PageInterface[];
}

const NotFound: NextPage<Props> = () => {
  return (
    <Page
      title="Upsss..."
      description="An error has occurred. Please back to home."
      keywords="Error 404"
    >
      <Section>
        <Container>
          <ErrorContent>
            <ErrorText>
              <Heading variant="h3" weight="regular">
                Oops, something went wrong
              </Heading>
              <Heading variant="h5" weight="bold">
                Please, check your connection <span>and reload the page</span>
              </Heading>
              <CustomLink to="/">
                <Button variant="outlined" iconLeft={true}>
                  Back to home
                </Button>
              </CustomLink>
            </ErrorText>

            <BannerContainer>
              <Image
                src={'/images/icons/no-conection.png' || '/images/default-bg.svg'}
                alt="Error image reference"
                height="90%"
                width="120%"
                layout="responsive"
                objectFit="contain"
                priority
              />
            </BannerContainer>
          </ErrorContent>
        </Container>
      </Section>
    </Page>
  );
};

export default NotFound;
