<script>
	import { Button, Modal, Dialog } from 'attractions';
	import { bind } from 'svelte/internal';
	import FaGithubAlt from 'svelte-icons/fa/FaGithubAlt.svelte';

	let modalOpen = false;
</script>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the SvelteKit docs.</p>

<p>
	Go to <a href="https://www.netlifycms.org">netlifycms.org</a> to check out the static git based cms!
</p>

<p>
	Integrates with <a href="https://mdsvex.com">mdsvex.com</a> for powerful clean markdown. This is
	based on <a href="https://mdxjs.com/docs/what-is-mdx/#mdx-syntax">mdx</a>), view this site for the
	syntax.
</p>

<Button outline on:click={() => (modalOpen = true)}>Lets Go!!</Button>
<Modal bind:open={modalOpen} let:closeCallback>
	<Dialog title="Wait!" {closeCallback}>
		The rest is your job, go well!
		<div class="close-button-div">
			<Button
				filled
				on:click={() =>
					(location.href = 'https://github.com/zachsa999/sveltekit-netlify-cms-template')}
			>
				<div class="icon">
					<FaGithubAlt />
				</div>
			</Button>
		</div>
	</Dialog>
</Modal>

<style lang="scss">
	@use '../../static/css/theme.scss';
	.close-button-div {
		margin: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.icon {
		width: 23px;
		height: 23px;
	}
</style>
