<template>
    <NuxtLayout>
        <UContainer v-if="error.statusCode === 404">
            <div class="flex flex-col flex-1 items-center justify-center h-screen">
                <img src="~/assets/images/404.svg" alt="404-image" width="400px" />
                <UButton icon="line-md:coffee-half-empty-twotone-loop"
                    class="w-fit bg-[#006d77] hover:bg-[#83c5be]"
                size="xl"
                @click="async () => await navigateTo('/')">
                    Go Back
                </UButton>
            </div>
        </UContainer>

        <UContainer v-else>
            error
        </UContainer>
    </NuxtLayout>
</template>

<script setup>
const error = useError();

const handleError = () => {
  clearError({
    redirect: '/dashboard',
  });
};
</script>
