import React from 'react'
import underline from "../assets/underline.jpg"
import dropdown from "../assets/dropdown.jpg"

const Hero = () => {
    const data = [
        {
            Rank: "1",
            Name: "subhsne",
            Calmar_Ratio: "3.96",
            Overall_Profit: "12345",
            Avg: "23465",
            Win: "12134",
            price: "67980",
            Action: "14245"

        },
        {
            Rank: "1",
            Name: "subhsne",
            Calmar_Ratio: "3.96",
            Overall_Profit: "12345",
            Avg: "23465",
            Win: "12134",
            price: "67980",
            Action: "14245",
        },
        {
            Rank: "1",
            Name: "subhsne",
            Calmar_Ratio: "3.96",
            Overall_Profit: "12345",
            Avg: "23454",
            Win: "12134",
            price: "67786",
            Action: "14245"

        },
        {
            Rank: "1",
            Name: "subhsne",
            Calmar_Ratio: "3.96",
            Overall_Profit: "12345",
            Avg: "23445",
            Win: "12134",
            price: "67768",
            Action: "14245"

        },
        {
            Rank: "1",
            Name: "subhsne",
            Calmar_Ratio: "3.96",
            Overall_Profit: "12345",
            Avg: "234321",
            Win: "12134",
            price: "67674",
            Action: "14245"

        },
        {
            Rank: "1",
            Name: "subhsne",
            Calmar_Ratio: "3.96",
            Overall_Profit: "12345",
            Avg: "234654",
            Win: "12134",
            price: "67897",
            Action: "14245"

        },
        {
            Rank: "1",
            Name: "subhsne",
            Calmar_Ratio: "3.96",
            Overall_Profit: "12345",
            Avg: "234234",
            Win: "12134",
            price: "67987",
            Action: "14245"

        },
    ]

    return (
        <div className=' h-full '>
            <div className='mt-24  shadow-sm flex flex-col justify-center items-center  '>
                <h1 className='flex justify-center items-center h-[5rem] text-6xl  '>LeaderBoards</h1>
                <img src={underline} alt="" className='w-[15rem]' />

            </div>
            <div className=' border-2 border-fuchsia-200 mt-4 bg-gray-100'>

                <div className='ml-20  flex justify-between '>
                    <h1 className='text-5xl font-medium mt-7  text-pink-400 sm:text-4xl'>Basic Backtest</h1>
                    <div>  <button className='w-32 h-12 mt-4 border-gray-500 bg-gray-300 hover:bg-gray-400'>Slippage</button>
                        <button className='w-20 h-12 mt-4 border-gray-500 bg-white '>0%</button>
                       </div>

                </div>
                <div className='flex flex-col items-center w-[90%] h-[480px]  m-30px rounded-md bg-gray-200 ml-20 mt-5 '>
                    <div className='flex justify-center font-medium text-xl mt-6 gap-14 w-full '>
                        <p className='w-[5%]'>Rank</p>
                        <p>Name</p>
                        <p>Calmar Ratio</p>
                        <p>Overall Profit</p>
                        <p>Avg. Daily Profit</p>
                        <p>Win%(Day)</p>
                        <p>Price(Rs)</p>
                        <p>Action</p>
                    </div>
                    <hr className='w-[90%] h-1 bg-pink-400 mt-2' />
                    {data.map((item) => {
                        return <> <div className='flex justify-center gap-5  font-normal w-full text-lg mt-6 shadow-lg shadow-pink-400  text-center text-gray-600 '>
                            <p className='w-[6%] text-center' >{item.Rank}</p>
                            <p className='w-[10%] text-center'>{item.Name}</p>
                            <p className='w-[12%] text-center'>{item.Calmar_Ratio}</p>
                            <p className='w-[12%] text-center'>{item.Overall_Profit}</p>
                            <p className='w-[10%] text-center'>{item.Avg}</p>
                            <p className='w-[10%] text-center'>{item.Win}</p>
                            <p className='w-[10%] text-center'>{item.price}</p>
                            <p className='w-[10%] text-center'>{item.Action}</p>

                        </div>
                            {/* <hr  className='w-[90%] h-1 bg-black mt-2' /> */}
                        </>
                    })}

                </div>
            </div>
        </div>
    )
}

export default Hero
