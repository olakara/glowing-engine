import classNames from 'classnames';
import { useState } from 'react'
import { Switch } from '@headlessui/react'

export default function AgentRowComponent(props) {

    const [enabled, setEnabled] = useState(false);

    function handleToggle() {
        setEnabled(props.vm.isActive);        
    }

    let rowStyle = classNames({ 
        'bg-gray-50': props.index % 2 !== 0,
    });

    return(
         <tr className={rowStyle}>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{props.vm.fullName}</td>
            <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">{props.vm.email}</td>
            <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell">{props.vm.cascadeName}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <Switch
                    checked={enabled}
                    onChange={handleToggle}
                    className={`${enabled ? 'bg-green-700' : 'bg-red-700'}
                    relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`}
                >
                    <span className="sr-only">Use setting</span>
                    <span
                    aria-hidden="true"
                    className={`${enabled ? 'translate-x-5' : 'translate-x-0'}
                        pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                    />
                </Switch>
            </td>
        </tr>
    )
}