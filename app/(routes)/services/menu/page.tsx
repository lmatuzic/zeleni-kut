import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/(ui)/components/shadcn/Tabs';
import MenuItem from './components/MenuItem';
import MenuSelect from './components/MenuSelect';

export default function Menu() {
	return (
		<div>
			<h1 className='mb-8 text-2xl text-center text-zk-green'>Jelovnik</h1>

			<Tabs defaultValue='appetizer' className='grid place-items-center'>
				<TabsList className='bg-transparent'>
					<div className='block md:hidden'>
						<MenuSelect
							menuItems={[{ name: 'appetizer' }, { name: 'pasta' }, { name: 'risotto' }]}
						/>
					</div>

					<div className='hidden gap-2 md:flex'>
						<TabsTrigger value='appetizer' className='border cursor-pointer'>
							Predjelo
						</TabsTrigger>

						<TabsTrigger value='pasta' className='border cursor-pointer'>
							Tjestenina
						</TabsTrigger>

						<TabsTrigger value='risotto' className='border cursor-pointer'>
							Rižoto
						</TabsTrigger>

						<TabsTrigger value='fish' className='border cursor-pointer'>
							Riba
						</TabsTrigger>

						<TabsTrigger value='meat' className='border cursor-pointer'>
							Meso
						</TabsTrigger>
					</div>
				</TabsList>

				<div className='p-4 mt-4 border rounded-md w-full lg:w-[1000px]'>
					<TabsContent value='appetizer'>
						<MenuItem
							name={`Zagorske štrukle`}
							ingredients={`Štrukle punjene sviježim kravljim sirom omotane dimljenom slaninom zapečene u
									vrhnju`}
							price={10.0}
						/>
					</TabsContent>

					<TabsContent value='pasta'>Make changes to your account here.</TabsContent>
					<TabsContent value='risotto'>Make changes to your account here.</TabsContent>
					<TabsContent value='fish'>Make changes to your account here.</TabsContent>
					<TabsContent value='meat'>Change your password here.</TabsContent>
				</div>
			</Tabs>
		</div>
	);
}
