import { Message } from './styled';
import { MessageContainerProps } from './types';

export const MessageContainer: React.FC<MessageContainerProps> = ({
  message,
}) => <Message>{message}</Message>;
