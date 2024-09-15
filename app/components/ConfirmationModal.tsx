'use client';

import { useEffect, useRef } from 'react';

interface ConfirmationModalProps {
  message: string;
  header: string;
  onDelete: () => void;
  submitBtnCls: string;
  isModalVisible: boolean;
  onDismiss: () => void;
}

const ConfirmationModal = ({
  message,
  header,
  onDelete,
  submitBtnCls,
  isModalVisible,
  onDismiss,
}: ConfirmationModalProps) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isModalVisible) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [isModalVisible]);

  const onSubmit = () => {
    onDelete();
    onDismiss();
  };

  return (
    <dialog ref={ref}>
      <div className="h-48 w-96 rounded-lg grid grid-rows-3 grid-cols-3">
        <div className="row-start-1 col-start-1 col-span-3 border-solid border-b-2 border-slate-200 pt-5 ps-2.5 font-medium text-xl">
          {header}
        </div>
        <div className="row-start-2 col-start-1 col-span-3 h-20 border-solid border-b-2 border-slate-200 pt-5 ps-2.5 font-light">
          {message}
        </div>
        <div className="row-start-3 col-start-1 col-span-3">
          <div className="grid grid-rows-1 grid-cols-4 mt-6">
            <div className="row-start-1 col-start-3 col-span-1 ps-6">
              <button
                className={'rounded-md bg-slate-200 h-9 w-16 font-light'}
                onClick={onDismiss}
              >
                Cancel
              </button>
            </div>
            <div className="row-start-1 col-start-4 col-span-1 ps-2.5">
              <button
                className={`rounded-md ${submitBtnCls} h-9 w-16 font-light`}
                onClick={onSubmit}
              >
                {'Delete'}
              </button>
            </div>
          </div>
        </div>
      </div>
      <button onClick={onDismiss} className="absolute top-5 right-4">
        X
      </button>
    </dialog>
  );
};

export default ConfirmationModal;
