---
title: Why it works
scope: One page for every form and layout in the library: why each one works for the person who sees it, from user psychology and design principles, with the sources behind each reason.
owns:
  - The one-page overview of why each form and layout works
see-also:
  - ./principles.md
  - ./sources.md
  - ../../../../archetypes/README.md
implements: []
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
tier: sample
---

# Why it works

This page puts every layout in one place, so you can see why it is built the way it is without opening each spec. Each layout's `spec.md` has a **Why it works** section with the full reasons, each linked to its source. The sources, and the one claim each is cited for, are listed in [sources.md](./sources.md). Where a reason has no research behind it, the spec says so ("HueGrid practice, not a research finding").

## The ideas behind every layout

These ideas are why the five principles in [principles.md](./principles.md) exist. The checks enforce them, so a post that passes already follows them.

| Idea | What the layouts do | Sources |
|---|---|---|
| One thing is seen first | Each layout has one element at display size; everything else is a clear step smaller. | Itti & Koch 2001; Pieters & Wedel 2004 |
| One accent is found at once | At most one element takes the accent colour. | Treisman & Gelade 1980; von Restorff 1933 |
| Things close together read as one | A label sits under its number; date and place sit in one block; a panel holds what belongs to it. | Wertheimer 1923; Palmer 1992 |
| Few items are easier to hold and choose from | Lists, agendas and menus have a small, fixed number of rows; there is one call to action. | Miller 1956; Cowan 2001; Hick 1952; Iyengar & Lepper 2000 |
| Less on the page is understood better | Word and character budgets; nothing decorative that says nothing. | Mayer 2009; Sweller 1988 |
| Text must be easy to read | The `contrast` and `min-text` checks; fixed line lengths. | W3C 2023 (WCAG 2.2); Legge & Bigelow 2011; Dyson 2004; Reber & Schwarz 1999 |
| People scan before they read | Short lines that start on one edge; numbers and headings that show the structure. | Nielsen 2006; Lorch 1989 |
| A named source is trusted more | A quote names its person; a stat can name its source. | Hovland & Weiss 1951 |
| The brand is the same every time | Colours and fonts come only from the brand's tokens; the logo is a locked file. | Zajonc 1968; Keller 1993; Romaniuk 2018 |

## Social post

A post is seen in a feed, often for less than a second. People take the gist of an image from a very brief glance and judge its visual appeal in about 50 ms (Potter et al. 2014; Lindgaard et al. 2006). So every post layout has one element at display size, which is where attention goes first (Itti & Koch 2001), and at most one element in the accent, which is found at once (Treisman & Gelade 1980). The 9:16 story uses the same layouts, adapted to its safe zone.

| Layout | Why it works | Sources |
|---|---|---|
| `social-post/announcement` (engine only, not in BAM) | The photograph is seen first, one line says what it is, and the scrim keeps the text readable over the picture. | Itti & Koch 2001; Potter et al. 2014; W3C 2023 (WCAG 2.2); Mayer 2009 |
| `social-post/carousel` | The cover works alone, each slide makes one point, and a fixed logo corner ties the swipe together. | Lindgaard et al. 2006; Mayer 2009; Wertheimer 1923; Murdock 1962 |
| `social-post/contrast` | Claim and counter share a shape so the viewer lines them up, and the solid panel sets the answer apart. | Gentner & Markman 1997; von Restorff 1933; Cowan 2001; W3C 2023 (WCAG 2.2) |
| `social-post/event` | Name, date and place read in size order as one block, with a date and place that make acting easy. | Pieters & Wedel 2004; Wertheimer 1923; Gollwitzer 1999; Treisman & Gelade 1980 |
| `social-post/headline` | One big line is read first, is short enough to scan, and sits in colours that are easy to read. | Itti & Koch 2001; Nielsen 2006; W3C 2023 (WCAG 2.2); Reber & Schwarz 1999 |
| `social-post/hiring` | The role is seen first, the accent kicker marks it as a job, and only what the reader needs is shown. | Itti & Koch 2001; Treisman & Gelade 1980; Mayer 2009; Inman & McAlister 1994 |
| `social-post/list` | Exactly three equal rows, numbered and led by a title, are easy to hold and read as one list. | Cowan 2001; Miller 1956; Wertheimer 1923; Lorch 1989; Ausubel 1960 |
| `social-post/offer` | The deal is the biggest thing, one condition adds a time or supply limit, and there is one thing to choose. | Pieters & Wedel 2004; Cialdini 2021; Inman & McAlister 1994; Hick 1952 |
| `social-post/partnership` | The two marks read as one pair, and showing both brands shares goodwill between them. | Wertheimer 1923; Simonin & Ruth 1998; Nielsen 2006; Reber et al. 2004 |
| `social-post/quote` | A fixed line length and large type make the quote easy to read, and a named source makes it believable. | Dyson 2004; Legge & Bigelow 2011; Wertheimer 1923; Hovland & Weiss 1951 |
| `social-post/stat` | The number is seen first, the label sits right under it as one fact, and a source can back the figure. | Itti & Koch 2001; Wertheimer 1923; Hovland & Weiss 1951 |

## Slides

An audience reads a slide and listens to the speaker at the same time, and working memory is small (Sweller 1988). People understand more when extra words and pictures are left out (Mayer 2009), and slides headed by one full-sentence claim were understood better than topic-and-bullet slides (Alley & Neeley 2005; Garner & Alley 2013). So each slide layout holds one point, with tight word budgets. Every slide shares one chrome (logo top left, footer and page number along the foot), and things that look alike are seen as one set, so the deck reads as one thing (Wertheimer 1923).

| Layout | Why it works | Sources |
|---|---|---|
| `slides/agenda` | A short numbered list of equal rows gives the audience an overview they can hold in mind before the talk starts. | Cowan 2001; Ausubel 1960; Lorch 1989; Wertheimer 1923 |
| `slides/bullets` | Three to five short points in large type, each marked by the same square, are quick to scan and easy to follow. | Cowan 2001; Sweller 1988; Wertheimer 1923; Legge & Bigelow 2011; Nielsen 2006 |
| `slides/chart` | Bars start at zero on one baseline with each number beside its bar, so lengths compare honestly at a glance. | Cleveland & McGill 1984; Pandey et al. 2015; Tufte 2001; Mayer 2009 |
| `slides/comparison` | Two matching panels with the better one marked on the right let the viewer compare part by part and see the point. | Gentner & Markman 1997; von Restorff 1933; Palmer 1992; W3C 2023 (WCAG 2.2) |
| `slides/next-steps` | One solid button and at most three numbered actions make the single thing to do easy to find and act on. | Treisman & Gelade 1980; Hick 1952; Iyengar & Lepper 2000; Lorch 1989; Murdock 1962 |
| `slides/numbers` | Three large figures in equal cells with labels beneath are seen first and read as one set of facts. | Cowan 2001; Pieters & Wedel 2004; Wertheimer 1923; W3C 2023 (WCAG 2.2) |
| `slides/process` | Numbered nodes joined left to right show the order at a glance, with a short detail under each step. | Wertheimer 1923; Cowan 2001; Lorch 1989; Mayer 2009 |
| `slides/questions` | One large word on an empty slide takes a glance to read and leaves the audience free to listen and ask. | Mayer 2009; Duarte 2008; Murdock 1962; Wertheimer 1923 |
| `slides/quote` | The words are largest, the named speaker and role sit just under them, and lines stay short enough to read. | Pieters & Wedel 2004; Hovland & Weiss 1951; Wertheimer 1923; Dyson 2004 |
| `slides/section` | A different surface, a large accent number and a large title mark a new part of the talk clearly. | Zacks & Swallow 2007; Lorch 1989; Pieters & Wedel 2004; W3C 2023 (WCAG 2.2) |
| `slides/stat` | One huge number with its label and source directly under it is taken in at a glance and found at once. | Pieters & Wedel 2004; Duarte 2008; Wertheimer 1923; Treisman & Gelade 1980 |
| `slides/statement` | One sentence with nothing else on the slide gives the audience one thing to read and one point to take away. | Alley & Neeley 2005; Itti & Koch 2001; Mayer 2009 |
| `slides/thanks-contact` | A large closing line and one accent contact line, with the other ways to reach you grouped under it, are easy to find and copy. | Murdock 1962; Treisman & Gelade 1980; Wertheimer 1923; Sweller 1988 |
| `slides/title` | One dominant title with a short subtitle makes a clear first impression and tells the audience what the talk is for. | Lindgaard et al. 2006; Pieters & Wedel 2004; Ausubel 1960 |
| `slides/title-speaker` | The title is read first, then the speaker's name and role as one unit, with the logo in its usual place. | Pieters & Wedel 2004; Wertheimer 1923; Hovland & Weiss 1951; Romaniuk 2018 |
| `slides/two-column` | Two columns with the same label, hairline and body in matching places let the viewer compare them and find their way. | Gentner & Markman 1997; Lorch 1989; Nielsen 2006; W3C 2023 (WCAG 2.2) |

## Web banner

People looking for something on a page often miss things that look like ads, even large bright ones, and animated ads slowed their search and were poorly remembered (Benway 1998; Burke et al. 2005). So each banner layout is static and says one thing: who (the logo), what (one headline) and what to do (one call to action). Display ads show at 1x, so each size has its own text-size floor, kept above the size where reading slows sharply (Legge & Bigelow 2011).

| Layout | Why it works | Sources |
|---|---|---|
| `banner/billboard` | The headline is the largest text, the message groups on the left, and one action sits at the right with readable contrast. | Itti & Koch 2001; Pieters & Wedel 2004; Wertheimer 1923; Nielsen 2006; Hick 1952; W3C 2023 (WCAG 2.2); Reber et al. 2004 |
| `banner/custom` | Type scales with the short side, so the headline stays largest and the reading path stays one row or one column. | Itti & Koch 2001; Wertheimer 1923; Hick 1952; Legge & Bigelow 2011 |
| `banner/half-page` | A clear headline, one message per unit and short copy make an ad that gets a short look quick to take in. | Itti & Koch 2001; Benway 1998; Mayer 2009; Sweller 1988; W3C 2023 (WCAG 2.2); Reber et al. 2004 |
| `banner/hero` | The h1 leads, an eyebrow names the topic, and all lines share one edge inside the central crop area. | Itti & Koch 2001; Lorch 1989; Wertheimer 1923 |
| `banner/leaderboard` | One short row of logo, headline and button, with a clear headline, reads in the short look an ad gets. | Cowan 2001; Itti & Koch 2001; Pieters & Wedel 2004; Benway 1998; Legge & Bigelow 2011 |
| `banner/link-preview` | A large title, a short title budget and a grouped block on the centre line read quickly and still read when the card is cropped. | Itti & Koch 2001; Nielsen 2006; Wertheimer 1923 |
| `banner/mobile` | A row of three things, a mark without wordmark and one short button keep a tiny unit simple to take in. | Cowan 2001; Mayer 2009; Itti & Koch 2001; Hick 1952 |
| `banner/profile-cover` | One line and a logo leave nothing to compete, and the text stays clear of the profile photo. | Itti & Koch 2001; Reber et al. 2004; Wertheimer 1923 |
| `banner/rectangle` | A large headline, one message, a filled button that stands out and short copy keep the unit clear. | Pieters & Wedel 2004; Benway 1998; Treisman & Gelade 1980; Sweller 1988 |
| `banner/skyscraper` | A few large words in a column read top to bottom, with short budgets and a text-size floor. | Itti & Koch 2001; Benway 1998; Cowan 2001; Legge & Bigelow 2011 |

## Email header

An email client shows the 1200×400 header at 600×200, so every size is set for that half-size view and the smallest text is 16px on the reader's screen (Legge & Bigelow 2011). Readers scan an inbox and a newsletter more than they read (Nielsen 2006), so the header has one headline. It is the same header in every issue, and a logo or colour becomes linked to a brand by being used the same way, often (Romaniuk 2018).

| Layout | Why it works | Sources |
|---|---|---|
| `email/header` | Text is sized for the half-size email view, the headline leads, a kicker names the topic and the logo stays in one place. | Legge & Bigelow 2011; Itti & Koch 2001; Lorch 1989; Romaniuk 2018 |

## Mock-ups

A mock-up shows a finished, passing asset in a real scene: a bag, a cup, a phone, a shop window. Pictures that help people imagine using a product shape how they judge it, and a product shown ready for the hand raised purchase intention in studies (MacInnis & Price 1987; Elder & Krishna 2012). The scene changes and the artwork stays the same: the review checks hold the design, words, logo and colours, because a brand asset is built by using it the same way each time (Romaniuk 2018).

| Layout | Why it works | Sources |
|---|---|---|
| `mockup/bus-shelter` | The poster is shown as a passer-by meets it, in any light, with the brand mark and colours unchanged and no rival adverts in the panel. | Potter et al. 2014; Romaniuk 2018; Pieters & Wedel 2004; Reber et al. 2004 |
| `mockup/card-on-desk` | The card is shown ready to pick up, with real stock and optional hands, so the owner can picture holding it, and the design stays unchanged. | Elder & Krishna 2012; MacInnis & Price 1987; Peck & Shu 2009; Romaniuk 2018; Reber et al. 2004 |
| `mockup/cup-sleeve` | The sleeve is shown in use at a café counter, repeating the same unchanged mark with every cup and no rival brands in view. | MacInnis & Price 1987; Zajonc 1968; Keller 1993; Romaniuk 2018; Pieters & Wedel 2004 |
| `mockup/lanyard` | The badge is shown where it is worn, read at a glance, and repeated unchanged across an event against a plain lanyard. | MacInnis & Price 1987; Potter et al. 2014; Keller 1993; Romaniuk 2018; Itti & Koch 2001 |
| `mockup/laptop-screen` | The banner, email header or slide is shown on a screen with no interface around it, so the words and brand read unchanged. | MacInnis & Price 1987; Sweller 1988; Legge & Bigelow 2011; Romaniuk 2018 |
| `mockup/menu-on-table` | The menu is shown at a diner's height with its order, headings and every line unchanged, on a plain table. | Yang 2012; MacInnis & Price 1987; Lorch 1989; Reber et al. 2004 |
| `mockup/phone-in-hand` | The post is shown in a hand, ready to use, at screen brightness with no app clutter, so it reads at a glance and stays on brand. | Elder & Krishna 2012; MacInnis & Price 1987; Potter et al. 2014; Lindgaard et al. 2006; Romaniuk 2018 |
| `mockup/shop-window` | The poster is shown from the pavement, with glare kept off the words, one brand in view and colours held in any weather. | Potter et al. 2014; W3C 2023 (WCAG 2.2); Reber et al. 2004; Romaniuk 2018 |
| `mockup/t-shirt` | The print is shown on a shirt, worn or hung, so the owner can picture wearing it, with a clear ground and a repeated, unchanged mark. | MacInnis & Price 1987; Peck & Shu 2009; Reber et al. 2004; Zajonc 1968 |
| `mockup/tote-bag` | The bag is shown carried, with hands or a person, so the owner can picture it, and the one unchanged design repeats wherever the bag goes. | MacInnis & Price 1987; Peck & Shu 2009; Zajonc 1968; Keller 1993; Romaniuk 2018 |

## Print

Print is read on a wall, in a rack, at a table or in a hand, often in passing, so the main line has to read in a glance (Potter et al. 2014). Every print frame is a trim size at 150 dpi with one text-size floor, 8pt, above the size where reading slows sharply (Legge & Bigelow 2011). The menu follows how diners read a menu: in order, top to bottom (Yang 2012).

| Layout | Why it works | Sources |
|---|---|---|
| `print/card-back` | Who the person is comes first, and the contact lines follow as one short block on a single edge. | Wertheimer 1923; Itti & Koch 2001; Cowan 2001 |
| `print/card-front` | The front shows one large mark and at most one short line, so the brand is recognised at a glance. | Reber et al. 2004; Pieters & Wedel 2004; Romaniuk 2018 |
| `print/flyer` | The viewer reads the headline, then the date and place as one block, then a short description. | Itti & Koch 2001; Wertheimer 1923; Lorch 1989; Mayer 2009 |
| `print/menu` | Items run in one column with prices on one edge, so the viewer scans down a short list and chooses quickly. | Wertheimer 1923; Yang 2012; Hick 1952; Iyengar & Lepper 2000 |
| `print/offer-flyer` | One large number in the accent colour tells the viewer the deal at once, and when and where follow in one row. | Itti & Koch 2001; Treisman & Gelade 1980; von Restorff 1933; Wertheimer 1923; Inman & McAlister 1994 |
| `print/postcard` | The headline is read first, the body second, and the plain, high-contrast picture side is easy to take in. | Itti & Koch 2001; Lindgaard et al. 2006; W3C 2023 (WCAG 2.2); Reber et al. 2004 |
| `print/poster` | A single large headline can be read in a glance, from a distance, with nothing else competing for it. | Potter et al. 2014; Itti & Koch 2001; Pieters & Wedel 2004 |
| `print/rack-card` | A big headline, then exactly three points of one shape, then one call to action: easy to scan and to remember. | Itti & Koch 2001; Wertheimer 1923; Cowan 2001; Murdock 1962 |
| `print/sticker` | A sticker shows one mark and almost no words, so it is recognised at once and builds familiarity over repeated sightings. | Reber et al. 2004; Zajonc 1968; Romaniuk 2018; Pieters & Wedel 2004 |
| `print/table-tent` | A diner or customer reads one headline and one line from where they sit, then meets a single next step. | Itti & Koch 2001; Legge & Bigelow 2011; Iyengar & Lepper 2000 |

## Decisions

- 2026-10-21 — Added with a **Why it works** section in every layout spec and a checked source list (Arjun asked for the reasons from user psychology and design principles, with one overview page so participants need not click through). Every reason cites a source from `sources.md` for that source's one claim, or is marked HueGrid practice.

## Never do

- Never add a reason here that the layout's spec does not give, or a source that is not in `sources.md`.
