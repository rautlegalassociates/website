import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { closeAppointmentModal } from './appointmentSlice';
import { AppointmentForm } from './AppointmentForm';

export const AppointmentModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isModalOpen, preselectedCategory } = useAppSelector(
    (state) => state.appointmentUi
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        dispatch(closeAppointmentModal());
      }
    };
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen, dispatch]);

  if (!isModalOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div className="relative bg-[#FAF8F5] border border-[#C7A56A]/50 rounded-sm w-full max-w-3xl max-h-[92vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-[#FAF8F5] z-10 px-6 sm:px-8 py-5 border-b border-[#E2DBCD] flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#B38E51] font-semibold block">
              Consultation Fee: NPR 500
            </span>
            <h3 id="modal-title" className="font-serif text-xl sm:text-2xl font-bold text-[#101C2C]">
              Book an Advocate Consultation
            </h3>
          </div>
          <button
            onClick={() => dispatch(closeAppointmentModal())}
            className="p-1.5 text-slate-500 hover:text-slate-900 rounded-sm hover:bg-slate-200 transition-colors"
            aria-label="Close appointment modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <AppointmentForm
            initialCategory={preselectedCategory}
            onSuccessCallback={() => {
              // keep modal open to show reference code
            }}
          />
        </div>
      </div>
    </div>
  );
};
