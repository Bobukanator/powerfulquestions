<template>
  <section>
    <NuxtLink to="/">
      <div class="columns is-centered notification is-primary">
        <div class="column is-3">
          <b-image :src="require('@/static/images/Powerful Questions-logos.jpeg')" alt="The Powerful Questions logo"
            class="is-small"></b-image>
        </div>
      </div>
    </NuxtLink>
    <section class="section">
      <div class="columns is-multiline">
        <div class="content column is-half is-offset-one-quarter">
          <p>
            A long time ago, in a corporate office far, far away, a professional coach trainer held a session with a
            group of eager and enthusiastic managers learning how to coach.
          </p>
          <p>
            We were taught how to coach for performance, coach for career development, and coach to solve complex
            corporate problems. We were introduced to the <a href="https://en.wikipedia.org/wiki/GROW_model">GROW</a>
            model and spent several days learning from our teacher and practicing with each other.
          </p>
          <p>
            I thoroughly enjoyed the training and immediately started trying it out with my team and peers. However, one
            of the challenges I experienced was remembering powerful questions I could utilize as I practiced this new
            art. So sometime around 2013, I created a Tumblr blog and a Twitter account and started collecting powerful
            questions from anywhere I could find them.
          </p>
          <p>
            This site is a refresh of those powerful questions recreated for the booming 20s. The only purpose is to
            help other inspiring coaches by making these questions available to you. If you want to contribute your own
            powerful questions, simply tweet us using the button below.
          </p>
          <center><a href="https://twitter.com/intent/tweet?screen_name=PwrfulQuestions&ref_src=twsrc%5Etfw"
              class="twitter-mention-button" data-show-count="false">Tweet to @PwrfulQuestions</a>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </center>
        </div>
      </div>
      </div>
    </section>
  </section>
</template>
<script>
export default {
  head() {
    return {
      title: "About",
      meta: [
        {
          name: "description",
          hid: "description",
          content:
            "A long time ago, in a corporate office far, far away, a professional coach trainer held a session with a group of eager and enthusiastic managers learning how to coach.",
        },
      ],
    };
  },
};
</script> 