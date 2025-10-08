import { useEffect, useRef, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

export default function CustomSelect() {
    
	const [selected, setSelected] = useState<string>('Select an option');
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		}

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	return (
		<div className="relative mb-4" ref={dropdownRef}>
			<button
				className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 flex justify-between items-center focus:outline-none"
				onClick={() => setIsOpen(!isOpen)}>
				<p className="pr-4 text-sm">{selected}</p>
				<FontAwesomeIcon
					className={`text-base text-gray-300 transition-transform ${isOpen ? 'rotate-180' : ''}`}
					icon={faChevronDown}
				/>
			</button>
			{isOpen && (
				<motion.ul
					initial={{ opacity: 0, y: -5 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -5 }}
					className="absolute rounded-md left-0 w-full bg-white border border-t-0 border-gray-300 z-10 overflow-hidden">
					{options.map((option, index) => (
						<li
							key={index}
							className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
							onClick={() => {
								setSelected(option);
								setIsOpen(false);
							}}>
							{option}
						</li>
					))}
				</motion.ul>
			)}
		</div>
	);
}
