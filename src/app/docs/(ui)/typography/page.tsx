export default function Typography() {
    // 공통 스타일 변수 정의
    const containerStyles = 'flex flex-col justify-center items-center gap-4 px-10 py-5 bg-silver-200';
    const textBaseStyles = 'font-normal text-base';

    return (
        <div className='mx-auto max-w-7xl pt-6'>
            <h3 className='mb-4 font-bold'>Typography</h3>

            <div className='flex flex-col gap-4'>
                <div className="font-medium">폰트 속성은 Semibold, Regular, Light 3가지만 사용</div>
                <div className='grid grid-cols-3 items-center gap-4'>
                    {/* Semibold 예시 */}
                    <div className={containerStyles}>
                        <div className="font-semibold text-10xl">가나다</div>
                        <div className={`${textBaseStyles} font-semibold`}>
                            동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세
                            무궁화 삼천리 화려 강산대한사람 대한으로 길이 보전하세
                        </div>
                        <div className="font-semibold">Semibold</div>
                    </div>

                    {/* Regular 예시 */}
                    <div className={containerStyles}>
                        <div className="font-normal text-10xl">가나다</div>
                        <div className={`${textBaseStyles} font-normal`}>
                            동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세
                            무궁화 삼천리 화려 강산대한사람 대한으로 길이 보전하세
                        </div>
                        <div className="font-normal">Regular</div>
                    </div>

                    {/* Light 예시 */}
                    <div className={containerStyles}>
                        <div className="font-light text-10xl">가나다</div>
                        <div className={`${textBaseStyles} font-normal`}>
                            동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세
                            무궁화 삼천리 화려 강산대한사람 대한으로 길이 보전하세
                        </div>
                        <div className="font-light">Light</div>
                    </div>

                    {/* Semibold 예시 (영문) */}
                    <div className={containerStyles}>
                        <div className="font-semibold text-10xl">ABab123</div>
                        <div className={`${textBaseStyles} font-semibold`}>
                            Oh say, can you seeBy the dawn's early lightWhat so proudly
                            we hailedAt the twilight's last gleaming 1234567890
                        </div>
                        <div className="font-semibold">Semibold</div>
                    </div>

                    {/* Regular 예시 (영문) */}
                    <div className={containerStyles}>
                        <div className="font-normal text-10xl">ABab123</div>
                        <div className={`${textBaseStyles} font-normal`}>
                            Oh say, can you seeBy the dawn's early lightWhat so proudly
                            we hailedAt the twilight's last gleaming 1234567890
                        </div>
                        <div className="font-normal">Regular</div>
                    </div>

                    {/* Light 예시 (영문) */}
                    <div className={containerStyles}>
                        <div className="font-light text-10xl">ABab123</div>
                        <div className={`${textBaseStyles} font-normal`}>
                            Oh say, can you seeBy the dawn's early lightWhat so proudly
                            we hailedAt the twilight's last gleaming 1234567890
                        </div>
                        <div className="font-light">Light</div>
                    </div>
                </div>

                <table className="border-t border-natural-400">
                    <colgroup>
                        <col className="w-[355px]" />
                        <col className="w-auto" />
                        <col className="w-[4%]" />
                        <col className="w-[10%]" />
                    </colgroup>
                    <tbody>
                        <tr className="border-b border-natural-300 px-2 bg-natural-50">
                            <td className="py-8 pl-2 font-semibold">Hierarchy</td>
                            <td className="py-8 font-semibold">Typeface</td>
                            <td className="py-8 font-semibold text-center">Size</td>
                            <td className="py-8 font-semibold text-center">Leading 행간</td>
                        </tr>
                        {/* Display */}
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <tr key={`display${i}`}>
                                <td className={`text-${12 - i}xl`}>Display{i}</td>
                                <td className={`text-${12 - i}xl`}>동틀 녘 햇빛 포개짐</td>
                                <td className="text-center">{(96 - (i - 1) * 8).toString()}</td>
                                <td className="text-center">{(120 - (i - 1) * 6).toString()}</td>
                            </tr>
                        ))}
                        <tr><td className="h-10" colSpan={4}><div className="h-px bg-natural-400" /></td></tr>
                        {/* Headline */}
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <tr key={`headline${i}`}>
                                <td className={`text-${7 - i}xl`}>Headline{i}</td>
                                <td className={`text-${7 - i}xl`}>동틀 녘 햇빛 포개짐</td>
                                <td className="text-center">{(48 - (i - 1) * 8).toString()}</td>
                                <td className="text-center">{(62 - (i - 1) * 6).toString()}</td>
                            </tr>
                        ))}
                        <tr><td className="h-10" colSpan={4}><div className="h-px bg-natural-400" /></td></tr>
                        {/* Title */}
                        {[1, 2, 3, 4, 5].map(i => (
                            <tr key={`title${i}`}>
                                <td className={`text-${6 - i}xl`}>Title{i}</td>
                                <td className={`text-${6 - i}xl`}>동틀 녘 햇빛 포개짐</td>
                                <td className="text-center">{(32 - (i - 1) * 4).toString()}</td>
                                <td className="text-center">{(42 - (i - 1) * 6).toString()}</td>
                            </tr>
                        ))}
                        <tr><td className="h-10" colSpan={4}><div className="h-px bg-natural-400" /></td></tr>
                        {/* Body */}
                        {[
                            { label: 'body1', size: 12, leading: 16 },
                            { label: 'body2', size: 14, leading: 20 },
                            { label: 'body3', size: 16, leading: 24 },
                        ].map((item, index) => (
                            <tr key={index}>
                                <td className="text-base">{item.label}</td>
                                <td className="text-base">동틀 녘 햇빛 포개짐</td>
                                <td className="text-center">{item.size}</td>
                                <td className="text-center">{item.leading}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
