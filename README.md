# pub-colormi
칼라미 퍼블리싱 

# 로컬 설정
1. vsCode > format on save 활성화

# npm 
```bash
npm install
npm run dev
```

# naming (OOCSS)

```css
EX)

.form
.form-radio > 
  .label + .radio 
&.error
&.warning

.form-checkbox > 
  .label + .checkbox
&.error
&.warning

.form-select >
  .option
&.error
&.warning

.form-field 
&.error
&.clear


.button
&.xlarge
&.large
&.medium (default - medium 클래스 안써도 됨)
&.small
&:hover
&.primary
&.highlight
&.outlined
&.secondary



wrapping 시
.header-wrap
.footer-wrap
.table-wrap
.util-wrap
.gnb-wrap
.list-wrap
.box-wrap
.card-wrap
.title-wrap
....etc

image 
.image-box
.image-caption
.image-title
....etc

section
.section-title
.box-title
.list-title
....etc

tooltip
.tooltip-box
.tooltip-description
&.open
&.close
....etc

alert
.alert-box
.alert-button
.alert-button-wrap
.alert-description
...etc

icon
.icon-menu
.icon-arrow
&.right
&.left
.icon-close
&.large
&.small
.icon-angle-bracket
.icon-plus
.icon-required
...etc

step
.step-list
.step-list > .activated 
...etc

link
.link-search
....etc
```


**disabled, readonly, selected , focused 는 props 선택자로**
