<template>
    <div>
        <h2 class="sub-titles-stocks">Stocks page</h2>
        <router-view v-if="this.$store.state.startGame"></router-view>
        <h4 class="start-game-titles-stocks" v-else>Press Start Game to Start Trading</h4>
        <hr>
    </div>
</template>
