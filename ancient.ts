<TeXmacs|2.1.2>

<style|<tuple|source|british>>

<\body>
  <\active*>
    <\src-title>
      <src-style-file|ancient|1.0>

      <src-purpose|Automatically generated style file.>
    </src-title>
  </active*>

  <use-package|chinese|article>

  <\active*>
    <\src-comment>
      Style parameters.
    </src-comment>
  </active*>

  <assign|page-medium|paper>

  <\active*>
    <\src-comment>
      Macro definitions.
    </src-comment>
  </active*>

  <assign|pinyin|<macro|body|py|<above|<arg|body>|<arg|py>>>>

  <assign|person|<macro|body|<underline|<arg|body>>>>

  <\active*>
    <\src-comment>
      1 (#2560) 20 (#2473)

      21 (#3251) 35(#325F)

      36 (#32B1) 50 (#32BF)
    </src-comment>
  </active*>

  <assign|textcircled|<macro|text|<style-with|src-compact|none|<case|<equal|<arg|text>|1>|①|<equal|<arg|text>|2>|②|<equal|<arg|text>|3>|③|<equal|<arg|text>|4>|④|<equal|<arg|text>|5>|⑤|<equal|<arg|text>|6>|⑥|<equal|<arg|text>|7>|⑦|<equal|<arg|text>|8>|⑧|<equal|<arg|text>|9>|⑨|<equal|<arg|text>|10>|⑩|<equal|<arg|text>|11>|⑪|<equal|<arg|text>|12>|⑫|<equal|<arg|text>|13>|⑬|<equal|<arg|text>|14>|⑭|<equal|<arg|text>|15>|⑮|<equal|<arg|text>|16>|⑯|<equal|<arg|text>|17>|⑰|<equal|<arg|text>|18>|⑱|<equal|<arg|text>|19>|⑲|<equal|<arg|text>|20>|⑳|<arg|text>>>>>

  <assign|footnote-sep|>

  <assign|render-footnote*|<macro|sym|nr|body|<style-with|src-compact|none|<\float|footnote|>
    <\style-with|src-compact|none>
      <smaller|<with|par-mode|justify|par-left|0cm|par-right|0cm|font-shape|right|dummy|<value|page-fnote-sep>|dummy|<value|page-fnote-barlen>|<style-with|src-compact|none|<surround|<locus|<id|<hard-id|<arg|body>>>|<link|hyperlink|<id|<hard-id|<arg|body>>>|<url|<merge|#footnr-|<arg|nr>>>>|<textcircled|<arg|sym>>><footnote-sep>|<set-binding|<merge|footnote-|<arg|nr>>|<value|the-label>|body><right-flush>|<style-with|src-compact|none|<arg|body>>>>>>
    </style-with>
  </float>>>>

  <assign|reference|<macro|Id|<locus|<id|<hard-id|<arg|Id>>>|<link|hyperlink|<id|<hard-id|<arg|Id>>>|<url|<merge|#|<arg|Id>>>>|<compound|textcircled|<range|<arg|Id>|<length|footnote->|<length|<arg|Id>>>>>>>
</body>

<initial|<\collection>
</collection>>