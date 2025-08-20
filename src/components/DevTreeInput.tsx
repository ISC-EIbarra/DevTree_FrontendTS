import { Switch } from '@headlessui/react';
import type { DevTreeLink } from '../types';
import { classNames } from '../utils';

type DevTreeInputProps = {
  devTreeLink: DevTreeLink;
};

export default function DevTreeInput({ devTreeLink }: DevTreeInputProps) {
  return (
    <div className="bg-white flex gap-4 p-5 items-center rounded-xl">
      <div
        className="w-12 h-12 bg-cover"
        style={{
          backgroundImage: `url('/social/icon_${devTreeLink.name}.svg')`,
        }}
      ></div>
      <input
        type="text"
        className="flex-1 rounded-3xl border border-gray-200"
      />
      <Switch
        checked={devTreeLink.enabled}
        onChange={() => {}}
        className={classNames(
          devTreeLink.enabled ? 'bg-blue-500' : 'bg-gray-200',
          'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            devTreeLink.enabled ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
          )}
        />
      </Switch>
    </div>
  );
}
