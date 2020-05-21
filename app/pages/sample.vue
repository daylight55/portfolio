<template>
  <div>
    <!-- 高さをブレークポイントで動的に変える -->
    <v-card :height="bkPoint.cardHeight">
      <v-card-title>
        {{ title | truncate(bkpoint.titleLength) }}
      </v-card-title>
      <!-- 省略の末尾を指定する -->
      {{ text | truncate(bkpoint.textLength, '...続き') }}
      <v-card-text />
    </v-card>
  </div>
</template>

<script>
export default {
  filter: {
    /**
    * 文字を切り捨てる [色んな所で使うので共通化するといいよ！]
    * @param {String} text
    * @param {Number} length
    * @param {String} clamp
    */
    truncate (text, length, clamp) {
      text = text || ''
      clamp = clamp || '...'
      length = length || 30

      if (text.length <= length) return text
      return text.substring(0, length) + clamp
    }
  },
  data() {
    return {
       title: 'タイトルは長くても改行なしなら省略する方法が色々ある',
       text: 'テキストは改行ありだとcssだけで対処しきれないのでtrancate関数を作って対応する'
    }
  },
  computed: {
    bkPoint () {
      // $vuetify.breakpointでブレークポイントを取得
      const bkPt = this.$vuetify.breakpoint
      const point = { name: bkPt.name, cardHeight: 200, titleLength: 10, textLength: 15 }
      switch (bkPt.name) {
        case 'xl':
          point.titleLength = 30
          point.textLength = 100
          point.cardHeight = 150
          break
        case 'lg':
          point.titleLength = 20
          point.textLength = 80
          point.cardHeight = 150
          break
        case 'md':
          point.titleLength = 10
          point.textLength = 60
          point.cardHeight = 350
          break
        case 'sm':
          point.titleLength = 10
          point.textLength = 100
          point.cardHeight = 570
          break
        case 'xs':
          point.titleLength = 8
          point.textLength = 100
          point.cardHeight = 600
          break
        default:
          break
      }
      return point
    }
  }
}
</script>
