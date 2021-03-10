import { FooterContainer } from '../styles/components/CustomFooter';
import { FaGithub } from 'react-icons/fa';

export function CustomFooter() {
  return (
    <FooterContainer>
      <FaGithub />
      <a
        href='http://github.com/vini-coelho'
        target='_blank'
        rel='noreferrer'
      >
        Made with ♥ by Vinicius Coelho.
        </a>
    </FooterContainer>
  )
}
