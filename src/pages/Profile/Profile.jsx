import {Flame, ShieldCheck, PhoneCall, ShieldAlert,PlayCircle} from 'lucide-react';
import Marquee from "react-fast-marquee";
import { Helmet } from 'react-helmet';
import WindowSize from '../../components/WindowSize/WindowSize';
import {Swiper,SwiperSlide} from 'swiper/react';
import { Pagination, Scrollbar, A11y,Autoplay,EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import './swiper.css';
export default function Profile(){
    const alturaHeight = WindowSize();
    return(
        <main>
            <Helmet>
                <title>AcompX - Jéssica Gomes</title>
                <meta name="description" content="Apenas uma descrição do perfil do usuário" />
            </Helmet>
        <section>
            <div className="flex justify-center items-center flex-wrap w-[100%] dark:bg-dark" style={{height:`${alturaHeight}px`}}>
                <div
                    className="h-full w-[20%] dark:bg-dark border-r-2 gap-1.5 dark:border-zinc-800 border-zinc-100 flex justify-between p-3 flex-col">
                    <div className="flex items-center justify-between flex-wrap  w-full gap-2">
                        <div
                            className="py-1 px-3 rounded-[3px] text-sm font-normal flex items-center gap-1 dark:text-white dark:bg-zinc-800 dark:border-none border border-zinc-200">
                            <Flame className="text-red-500" />
                            <span>Perfil Destacado</span>
                        </div>
                        <div
                            className="dark:bg-zinc-800 dark:border-none border border-zinc-200 dark:text-white py-1 px-3 rounded-[3px] text-sm font-normal flex items-center gap-1">
                            <ShieldCheck className="text-blue-500" />
                            <span>Perfil Verificado</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap flex-col ">
                        <div className='flex items-end gap-2'>
                            <h1 className="dark:text-white text-4xl font-bold">Jéssica Gomes</h1>
                            <span className='text-zinc-400'>#8044</span>
                        </div>
                        <h3 className="text-lg dark:text-zinc-200 text-zinc-700">São Paulo, SP</h3>
                    </div>
                    <div className="pb-1.5">
                        <p className="text-base font-light leading-5 dark:text-zinc-200">Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit. Eligendi possimus voluptate,
                            totam ipsum nemo at reprehenderit, autem tempora accusantium tenetur suscipit earum maiores
                            perferendis explicabo.</p>
                    </div>
                    <div className="w-full flex flex-wrap flex-col gap-1.5 dark:text-white">
                        <div
                            className="w-full flex flex-wrap justify-between items-center px-3 border dark:border-zinc-700 border-zinc-200 py-2 ">
                            <span>Gênero</span>
                            Mulher
                        </div>
                        <div
                            className="w-full flex flex-wrap justify-between items-center px-3 border dark:border-zinc-700 border-zinc-200 py-2 ">
                            <span>Etnia</span>
                            Branca
                        </div>
                        <div
                            className="w-full flex flex-wrap justify-between items-center  px-3 border dark:border-zinc-700 border-zinc-200 py-2 ">
                            <span>Idade</span>
                            24 anos
                        </div>
                        <div
                            className="w-full flex flex-wrap justify-between items-center  px-3 border dark:border-zinc-700 border-zinc-200 py-2 ">
                            <span>Altura</span>
                            1.73M
                        </div>
                        <div
                            className="w-full flex flex-wrap justify-between items-center  px-3 border dark:border-zinc-700 border-zinc-200 py-2 ">
                            <span>Peso</span>
                            67Kg
                        </div>
                        <div
                            className="w-full flex flex-wrap justify-between items-center  px-3 border dark:border-zinc-700 border-zinc-200 py-2 ">
                            <span>Corpo</span>
                            Sarado
                        </div>
                    </div>

                    <div
                        className="h-auto w-full border dark:border-zinc-700 dark:text-zinc-200 border-zinc-200 flex flex-wrap justify-between items-center">
                        <div className="">
                            <nav>
                                <ul className="flex flex-col font-medium text-sm leading-[18px] p-2">
                                    <li>Segunda-Feira</li>
                                    <li>Terça-Feira</li>
                                    <li>Quarta-Feira</li>
                                    <li>Quinta-Feira</li>
                                    <li>Sexta-Feira</li>
                                    <li>Sábado</li>
                                    <li>Domingo</li>
                                    <li>Feriados</li>
                                </ul>
                            </nav>
                        </div>
                        <div className="">
                            <nav>
                                <ul className="flex items-end flex-col font-medium text-sm leading-[18px] p-2">
                                    <li>14:00 - 17:00</li>
                                    <li>04:00 - 12:00</li>
                                    <li>10:00 - 13:00</li>
                                    <li>20:00 - 23:00</li>
                                    <li>05:00 - 15:00</li>
                                    <li>07:00 - 12:00</li>
                                    <li>10:00 - 17:00</li>
                                    <li>08:00 - 10:00</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className=" w-full flex justify-center items-center">
                        <div className="flex justify-center items-center bg-white border border-zinc-300 flex-col gap-2 p-3">
                            <div className="flex items-end justify-center gap-2">
                                <h2 className="font-bold text-5xl">R$ 350</h2>
                                <h3 className="font-medium text-zinc-500 text-lg">Por Hora</h3>
                            </div>
                            <p className="text-center leading-4 text-zinc-900">Caso queira saber os valores de mais horas de
                                serviço entre em contato com o anúnciante</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <div>
                            <h3
                                className="flex items-center gap-2 justify-center py-1 px-5 dark:bg-white dark:text-black bg-black font-medium text-base rounded-sm text-white">
                                <PhoneCall className="h-5 w-5" />
                                (21) 996732-123
                            </h3>
                        </div>
                        <div className="">
                            <button 
                            className="group hover:bg-red-500 hover:transition-colors  hover:dark:text-white hover:text-white border-2 hover:border-transparent dark:border-zinc-700 border-zinc-200  py-1 px-5 bg-red dark:text-white rounded-sm flex items-center gap-2">
                                Denunciar
                                <ShieldAlert className='animate-pulse h-[25px] w-[25px] group-hover:animate-none group-hover:text-white text-red-500 '/>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-2.5 h-full w-[80%] p-2.5">
                    <div className="grid  gap-2 grid-cols-3 bg-red-blue-500 w-full">
                        <div className="flex justify-center items-center h-[270px] w-full bg-red-500 rounded-md group">
                            <Swiper
                                className='h-full w-full'
                                modules={[Pagination, Scrollbar, A11y,Autoplay,EffectFade]}
                                slidesPerView={1}
                                autoplay={true}
                                effect='fade'
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                                >

                                    {Array.from({length:5}).map((_,index)=>(
                                        <SwiperSlide key={index} className=' w-full'>
                                            <img className='h-full w-full object-cover rounded-md' src="https://images.pexels.com/photos/20396000/pexels-photo-20396000/free-photo-of-mar-alvorecer-amanhecer-aurora.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="foto" />
                                        </SwiperSlide>
                                    ))}
                            </Swiper>
                        </div>
                        <div className="relative flex justify-center items-center h-[270px] w-full bg-red-500 rounded-md ">
                            <img className=" h-full w-full object-cover rounded-md"
                                src="https://images.pexels.com/photos/3813345/pexels-photo-3813345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt=""/>
                            <PlayCircle
                                className="absolute h-[70px] w-[70px] text-zinc-100 cursor-pointer " />
                        </div>
                        <div className="relative flex justify-start items-end h-[270px] rounded-md w-full bg-red-500">
                            <img className=" h-full w-full object-cover rounded-md"
                                src="https://t2.tudocdn.net/603541?w=1920"
                                alt=""/>
                            <div className='absolute m-1 h-auto w-auto p-2 rounded-[3px] shadow-md bg-black'>
                                <nav>
                                    <ul className='text-zinc-300 font-normal text-[14px]'>
                                        <li><b className='text-base text-white'>Rua:</b> Rua Das Neves Guimarãs</li>
                                        <li><b className='text-base text-white'>Bairro:</b> Portuguesa</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <Marquee direction={"left"} pauseOnHover={true} speed={50} className="flex items-center py-1 w-full">
                            {Array.from({length:53}).map((_,index)=>(
                                <span
                                key={index}
                                className="mx-1 px-3 border dark:border-zinc-700 dark:text-white border-zinc-200 py-1 hover:cursor-pointer">
                                    serviços{ index }
                                </span>
                            ))}
                        </Marquee>
                    </div>
                    <div className='h-[550px] w-full flex items-center gap-1.5'>
                        <div className="h-full w-[24%] rounded-md">
                            <img className=' h-full object-cover rounded-md' src='https://images.pexels.com/photos/11101209/pexels-photo-11101209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='foto'/>
                        </div>
                        <div className="w-[76%] h-full rounded-md">
                            <img className=' h-full w-full object-fit rounded-md' src='https://images.pexels.com/photos/4050385/pexels-photo-4050385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='foto'/>
                        </div>
                    </div>
                    {/*<div className="flex justify-center items-center h-full w-full">
                        <div className=" h-full w-full flex items-center justify-between gap-2 ">
                            <div className="h-full w-[77%] rounded-xl relative">
                                <img className="absolute h-full w-full object-cover rounded-xl"
                                    src="https://t2.tudocdn.net/603541?w=1920" alt=""/>
                                <div
                                    className="m-4 h-auto w-[300px] py-2 px-3 shadow-profile dark:bg-black bg-white rounded-lg absolute flex flex-col gap-1 ">
                                    <div className="flex items-center gap-1 dark:text-white">
                                        <h3 className="font-semibold text-base">Local:</h3>
                                        <span className="text-[14px] font-normal">Lorem ipsum dolor sit amet.</span>
                                    </div>
                                    <div className="flex items-center gap-1 dark:text-white">
                                        <h3 className="font-semibold text-base">Rua:</h3>
                                        <span className="text-[14px] font-normal">Lorem ipsum dolor sit amet.</span>
                                    </div>
                                    <div className="flex items-center gap-1 dark:text-white">
                                        <h3 className="font-semibold text-base">Bairro:</h3>
                                        <span className="text-[14px] font-normal">Lorem ipsum dolor sit amet.</span>
                                    </div>
                                    <div className="flex items-center gap-1 dark:text-white">
                                        <h3 className="font-semibold text-base">CEP:</h3>
                                        <span className="text-[14px] font-normal">22354-310</span>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[100%] w-[23%] bg-black rounded-xl">
                                <img className="h-full w-full object-cover rounded-xl"
                                    src="https://images.pexels.com/photos/20359986/pexels-photo-20359986/free-photo-of-moda-tendencia-pessoas-mulher.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt=""/>
                            </div>
                        </div>
                    </div>*/}
                </div>
            </div>
        </section>
    </main>
    )

}

    