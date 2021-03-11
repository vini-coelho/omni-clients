import Link from 'next/link';
import { Modal, CardContainer, Button } from '../styles/components/NotificationModal';

interface Props {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export function NotificationModal({ visible, onConfirm, onCancel }: Props) {
  if (!visible) {
    return null;
  }

  return (
    <Modal>
      <CardContainer>
        <h2>Usuario adicionado!</h2>
        <span>Deseja adicionar outro usuario?</span>
        <Link href='/'>
          <Button onClick={onConfirm}>Sim</Button>
        </Link>
        <Button onClick={onCancel}
          style={{ backgroundColor: 'var(--red)', marginTop: 10 }}>Nao</Button>
      </CardContainer>
    </Modal>
  );
}
