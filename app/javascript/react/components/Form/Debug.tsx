import * as React from 'react';
import { FormSpy } from 'react-final-form';

export default function Debug() {
  return (
    <FormSpy>{(form) => <pre>{JSON.stringify(form, null, 2)}</pre>}</FormSpy>
  );
}
