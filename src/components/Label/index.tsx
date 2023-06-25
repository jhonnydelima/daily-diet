import { TextLabel } from './styles';

type Props = {
  label: string;
}

export function Label({ label }: Props) {
  return (
    <TextLabel>
      {label}
    </TextLabel>
  );
}