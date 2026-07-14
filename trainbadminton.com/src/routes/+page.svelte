<script lang="ts">
	import HeroImage from "$lib/assets/images/hompage.webp";
</script>

<div class="container">
	<enhanced:img class="img" src={HeroImage} />
	<div class="hero-text">
		<h1>The ultimate app for badminton training.</h1>
		<h3 class="text">Take your badminton skills to the next level.</h3>
	</div>
</div>

<style>
	h1 {
		font-family: "Daggersquare";
	}
	.container {
		display: flex;
		padding: 1rem 2rem;
		align-items: center;
	}
	.img {
		width: 480px;
		height: 720px;
	}
	.hero-text {
		display: flex;
		flex-direction: column;
		margin-left: auto;
		text-align: right;
	}
</style>
