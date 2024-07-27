import { createRef, useState } from 'react';
import useToast from './useToast';
import { createExpense } from '@/actions';

const useExpenseFormResult = () => {
  const ref = createRef<HTMLFormElement>();
  const [ result, setResult ] = useState('');
  const { isVisible, showToast } = useToast();
  
  const handleSubmit = async (formData: FormData) => {
    const response = await createExpense(formData);
    setResult(response);
    if (response === 'success' && ref.current) {
      ref.current.reset();
    }
    showToast();
  }

  return {
    ref,
    handleSubmit,
    result,
    isVisible,
  }
}

export default useExpenseFormResult;
