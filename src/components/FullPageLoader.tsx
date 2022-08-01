import { Spinner } from '@onrewind/ui';

function FullPageLoader() {
  return (
    <div className="h-[50vh]">
      <div className="h-full grid place-items-center">
        <Spinner className="text-primary h-20 w-20" />
      </div>
    </div>
  );
}

export default FullPageLoader;
