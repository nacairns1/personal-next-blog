import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";

export default function ResumeModal(props) {
	let [isOpen, setIsOpen] = useState(props.isOpen || false);

	useEffect(() => {
		if (props.isOpen !== undefined) setIsOpen(props.isOpen);
	}, [props.isOpen]);

	return (
		<Dialog
			open={isOpen}
			onClose={() => {
				props.closeHandler();
			}}
			className="relative z-50 flex flex-col items-center justify-center"
		>
			<div className="fixed inset-0 bg-base-100/70"></div>
			<div className="fixed inset-0 flex items-center justify-center p-4">
				<Dialog.Panel className="w-3/4 flex-col flex items-center justify-center gap-2 relative">
					<button
						className="btn  btn-sm btn-warning place-self-end"
						onClick={() => {
							props.closeHandler();
						}}
					>
						RETURN
					</button>
					<iframe
						src="/Cairns_Noah_Resume.pdf#view=fitH"
						className="w-full h-[90vh]"
					></iframe>
				</Dialog.Panel>
			</div>
		</Dialog>
	);
}
