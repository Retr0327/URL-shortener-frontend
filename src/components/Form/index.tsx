import { memo } from 'react';
import { ControllerProps } from 'types';
import TextInput from './FormikComponents';

function FormikController(props: ControllerProps) {
  const { control } = props;

  switch (control) {
    case 'text-input':
      return <TextInput {...props} />;
    default:
      return null;
  }
}

export default memo(FormikController);
