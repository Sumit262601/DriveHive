import { chartConfig } from "@/data/index";
import { StoragePieChart } from '@/charts/storage-chart'
import { Progress } from "@/components/ui/progress"
import { StorageBarChart } from "@/charts/bar-chart";
import { StorageAreaChart } from "@/charts/area-chart";

const Dashboard = () => {
  return (
    <div className='flex flex-col flex-1 gap-4 mb-5'>
      <div className="gap-4 grid md:grid-cols-4 mb-6 sm:grid-cols-2">
        {Object.keys(chartConfig).map((key) => (
          <div key={chartConfig[key].label} className="bg-sidebar shadow-xl border-2 border-accent p-5 rounded-xl h-60">
            <div className="mb-6">
              <img src={chartConfig[key].url} alt={chartConfig[key].label} width={55} />
            </div>
            <div className="mb-12">
              <span className='font-semibold text-xl'>
                {chartConfig[key].label}
              </span>
            </div>
            <div>
              <Progress value={(parseInt(chartConfig[key].data) / 500) * 100} className='mb-2' />
              <span className='sm:text-sm lg:text-sm md:text-xl'>
                {chartConfig[key].data !== '' ? chartConfig[key].data : 0}
                <span className='text-muted-foreground'> of 500 MB</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex lg:flex-row flex-col gap-4 mb-6">
        <div className="w-full lg:w-full">
          <StorageBarChart />
        </div>
        <div className="rounded-xl w-full lg:w-1/2">
          <StoragePieChart />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col gap-4 mb-6">
        <div className="rounded-xl w-full">
          <StoragePieChart />
        </div>
        <div className="w-full lg:w-full">
          <StorageAreaChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;