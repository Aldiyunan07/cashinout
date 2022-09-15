<template>
    <div class="container">
        <div class="w-full lg:w-8/12">
            <div class="w-full mb-8">
                <div class="bg-gray-200 transform -rotate-2 rounded-2xl">
                    <div class="bg-gradient-to-br from-blue-500 to-light-blue-400 text-white p-6 transform rotate-2 rounded-2xl">
                        <label class="block uppercase text-xs text-blue-100 font-semibold tracking-wider mb-1" for=""> Balance </label>
                        <div class="text-3xl font-semibold">
                            Rp.100.000
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex items-center -mx-2" >
                <div class="w-full px-2">
                    <div class="bg-gray-200 transform -rotate-3 rounded-2xl">
                        <div class="bg-gradient-to-br from-teal-500 to-cyan-400 text-white p-6 transform rotate-3 rounded-2xl">
                            <label class="block uppercase text-xs text-blue-100 font-semibold tracking-wider mb-1" for=""> Debit </label>
                            <div class="text-3xl font-semibold">
                                Rp.100.000
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full px-2">
                    <div class="bg-gray-200 transform -rotate-3 rounded-2xl">
                        <div class="bg-gradient-to-br from-red-500 to-yellow-400 text-white p-6 transform rotate-3 rounded-2xl">
                            <label class="block uppercase text-xs text-blue-100 font-semibold tracking-wider mb-1" for=""> Credit </label>
                                <div class="text-3xl font-semibold">
                                    Rp.100.000
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-10">
                <div class="border rounded-lg oveflow-hidden">
                    <div class="border-b px-6 py-4 bg-gray-50">
                        Transactions
                    </div>
                    <div class="px-6 py-6">
                        <a class="flex justify-between items-center mb-2 p-4 hover:bg-gray-50 rounded-lg hover:shadow" href="">
                            <span class="flex flex-col">
                                <span class="text-gray-500 text-xs"> 20 Nov 2020 15:13</span>
                                <span>Gaji Bulan November</span>
                            </span>
                            <span class="text-green-500">500.000</span>
                        </a>
                        <a class="flex justify-between items-center p-4 hover:bg-gray-50 rounded-lg hover:shadow" href="">
                            <span class="flex flex-col">
                                <span class="text-gray-500 text-xs"> 20 Nov 2020 15:13</span>
                                <span>Beli Smartphone</span>
                            </span>
                            <span class="text-red-500">100.000</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{

    }
</script>

<style>

</style>