import { createRef, useState } from 'react';
import useToast from './useToast';
import { createExpense } from '@/db/serverActions';

const useExpenseFormResult = () => {
  const ref = createRef<HTMLFormElement>();
  const [ createResult, setCreateResult ] = useState(0);
  const { isVisible, showToast } = useToast();

  const handleCreate = async (formData: FormData) => {
    const response = await createExpense(formData);
    setCreateResult(response);
    if (response > 0 && ref.current) {
      ref.current.reset();
    }
    showToast();
  }

  return {
    ref,
    handleCreate,
    createResult,
    isVisible,
  }
}

export default useExpenseFormResult;
