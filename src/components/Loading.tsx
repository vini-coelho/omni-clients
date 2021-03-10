import Spinner from 'react-loader-spinner';

import { Container } from '../styles/components/Loading';

export function Loading() {
  return (
    <Container>
      <Spinner type='ThreeDots' color='#fff' width={100} height={100} />
    </Container>
  )
}
