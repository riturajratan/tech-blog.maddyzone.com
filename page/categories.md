---
layout: modern-blog
permalink: /categories/
title: The topic index
---
<section class="directory-page shell"><a class="back-to-notes" href="{{ '/' | relative_url }}#archive">← All notes</a><p class="eyebrow">FOLLOW A THREAD</p><h1>The topic index<span>.</span></h1><p class="category-description">Every thread in the notebook, with the notes that belong to it.</p><div class="topic-directory">{% assign sorted_topics = site.categories | sort %}{% for group in sorted_topics %}<section class="directory-group"><h2>{{ group[0] | escape }} <span>{{ group[1].size }}</span></h2>{% for post in group[1] %}<a href="{{ post.url | relative_url }}"><span>{{ post.title | escape }}</span><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%Y' }}</time><span aria-hidden="true">↗</span></a>{% endfor %}</section>{% endfor %}</div></section>
