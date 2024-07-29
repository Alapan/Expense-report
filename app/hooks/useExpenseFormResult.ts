import { createRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import useToast from './useToast';
import { createExpense } from '../../db/serverActions';

const useExpenseFormResult = () => {
  const ref = createRef<HTMLFormElement>();
  const [ result, setResult ] = useState(0);
  const { isVisible, showToast } = useToast();
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    const response = await createExpense(formData);
    setResult(response);
    if (response > 0 && ref.current) {
      ref.current.reset();
      router.refresh();
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
