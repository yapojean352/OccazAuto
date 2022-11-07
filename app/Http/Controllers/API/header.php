<?php

if (is_front_page()) {
    $eventDate = new DateTime();
    $eventDate->setTime(0, 0, 0);

    $events = tribe_get_events([
        'start_date' => $eventDate->format('Y-m-d H:i:s'),
        'end_date' => $eventDate->modify('+8 day')->format('Y-m-d H:i:s'),
    ]);

    if(!empty($events)) {
        $header_classes .= " has_alert";
    }
}

?>

<header class="<?php echo $header_classes; ?> page_header">
	<div class="header_inner clearfix">
		<?php echo qode_get_module_template_part('templates/search/search', 'header', '', $params); ?>
		<div class="header_top_bottom_holder">
			<?php echo qode_get_module_template_part('templates/header-top/header-top', 'header', '', $params); ?>

			<div class="header_bottom clearfix" <?php echo $header_color_per_page; ?> >
				<?php if($header_in_grid){ ?>
				<div class="container">
					<div class="container_inner clearfix">
						<?php if($overlapping_content) {?><div class="overlapping_content_margin"><?php } ?>
							<?php } ?>
							<div class="header_inner_left">
								<?php if($centered_logo) {
									dynamic_sidebar( 'header_left_from_logo' );
								} ?>
								<?php echo qode_get_module_template_part('templates/mobile-menu/mobile-menu-button', 'header'); ?>
								<?php
								echo qode_get_logo(array(
									'logo_image' => true,
									'logo_image_light' => true,
									'logo_image_dark' => true,
									'logo_image_sticky' => true,
									'logo_image_popup' => true,
									'logo_image_mobile' => true
								));
								?>
								<?php if($centered_logo) {
									dynamic_sidebar( 'header_right_from_logo' );
								} ?>
							</div>
							<?php if(!$centered_logo) { ?>
								<div class="header_inner_right">
									<div class="side_menu_button_wrapper right">
										<?php if(is_active_sidebar('header_bottom_right')) { ?>
											<div class="header_bottom_right_widget_holder"><?php dynamic_sidebar('header_bottom_right'); ?></div>
										<?php } ?>
										<?php if(is_active_sidebar('woocommerce_dropdown')) {
											dynamic_sidebar('woocommerce_dropdown');
										} ?>
										<div class="side_menu_button">
											<?php echo qode_get_module_template_part('templates/search/search-button', 'header', '', $params); ?>
											<?php echo qode_get_module_template_part('templates/popup-menu/popup-menu-button', 'header', '', $params); ?>
											<?php echo qode_get_module_template_part('templates/side-area/side-menu-button-link', 'header', '', $params); ?>
										</div>
									</div>
								</div>
							<?php } ?>

							<?php if($centered_logo == true && $enable_search_left_sidearea_right == true ) { ?>
								<div class="header_inner_right left_side">
									<div class="side_menu_button_wrapper">
										<div class="side_menu_button">
											<?php echo qode_get_module_template_part('templates/search/search-button', 'header', '', $params); ?>
										</div>
									</div>
								</div>
							<?php } ?>

							<nav class="main_menu drop_down <?php echo esc_attr($menu_position); ?>">
								<?php
								wp_nav_menu( array( 'theme_location' => 'top-navigation' ,
									'container'  => '',
									'container_class' => '',
									'menu_class' => '',
									'menu_id' => '',
									'fallback_cb' => 'top_navigation_fallback',
									'link_before' => '<span>',
									'link_after' => '</span>',
									'walker' => new qode_type1_walker_nav_menu()
								));
								?>
							</nav>
							<div class="dist_secondary_menu">
								<nav>
									<ul>
										<li class="club-de-tir-button">
                                            <a href="<?php echo ICL_LANGUAGE_CODE == "fr" ? '/fr/club-de-tir/' : '/shooting-club/'; ?>">
                                            </a>

											<ul>
												<li>
													<a href="<?php if(ICL_LANGUAGE_CODE == "fr"){ ?>/fr/calendar/<?php } else { ?>/calendar/<?php }; ?>"><?php if(ICL_LANGUAGE_CODE == "fr"){ ?>Calendrier<?php } else { ?>Calendar<?php }; ?></a>
												</li>
												<li>
													<a href="<?php if(ICL_LANGUAGE_CODE == "fr"){ ?>/fr/activites/<?php } else { ?>/activities/<?php }; ?>"><?php if(ICL_LANGUAGE_CODE == "fr"){ ?>Activités<?php } else { ?>Activities<?php }; ?></a>
												</li>
												<li>
													<a href="<?php if(ICL_LANGUAGE_CODE == "fr"){ ?>/fr/devenir-membre/<?php } else { ?>/become-a-member/<?php }; ?>"><?php if(ICL_LANGUAGE_CODE == "fr"){ ?>Obtenir un PPA et/ou Devenir membre<?php } else { ?>Get a PAL and/or Become a Member<?php }; ?></a>
												</li>
												<li>
													<a href="<?php if(ICL_LANGUAGE_CODE == "fr"){ ?>/fr/reglements/<?php } else { ?>/rules-of-the-club/<?php }; ?>"><?php if(ICL_LANGUAGE_CODE == "fr"){ ?>Règlements<?php } else { ?>Rules of the Club<?php }; ?></a>
												</li>
												<li>
													<a href="<?php if(ICL_LANGUAGE_CODE == "fr"){ ?>/fr/nos-salles-de-tir/<?php } else { ?>/our-rooms/<?php }; ?>"><?php if(ICL_LANGUAGE_CODE == "fr"){ ?>Nos salles de tir<?php } else { ?>Our Rooms<?php }; ?></a>
												</li>
												<li>
													<a href="<?php if(ICL_LANGUAGE_CODE == "fr"){ ?>/fr/heures-douverture/<?php } else { ?>/opening-hours/<?php }; ?>"><?php if(ICL_LANGUAGE_CODE == "fr"){ ?>Heures d’ouverture<?php } else { ?>Opening Hours<?php }; ?></a>
												</li>
												<li>
													<a href="<?php if(ICL_LANGUAGE_CODE == "fr"){ ?>/fr/galerie-photos/<?php } else { ?>/photo-gallery/<?php }; ?>"><?php if(ICL_LANGUAGE_CODE == "fr"){ ?>Galerie photos<?php } else { ?>Photo Gallery<?php }; ?></a>
												</li>
												<li>
													<a href="<?php if(ICL_LANGUAGE_CODE == "fr"){ ?>/fr/documentation-pratique/<?php } else { ?>/useful-documentation/<?php }; ?>"><?php if(ICL_LANGUAGE_CODE == "fr"){ ?>Documentation pratique<?php } else { ?>Useful Documentation<?php }; ?></a>
												</li>
											</ul>
										</li>
										<li class="laser-shot-button">
											<a href="<?php if(ICL_LANGUAGE_CODE == "fr"){ ?>/fr/lasershot/<?php } else { ?>/lasershot-home/<?php }; ?>"></a>
											<ul>
												<?php if(ICL_LANGUAGE_CODE == "fr"){ ?>
												<li>
													<a href="/fr/lasershot/">En construction</a>
												</li>
												<?php }else{ ?>
												<li>
													<a href="/lasershot-at-a-glance/">Lasershot At A Glance</a>
												</li>
												<li>
													<a href="/lasershot-pricing/">LaserShot Pricing</a>
												</li>
												<li>
													<a href="/laser-shot-booking/">Laser Shot Booking</a>
												</li>
												<li>
													<a href="/laser-shot-games/">Laser Shot Games <i class="q_menu_arrow fa fa-angle-right"></i></a>
													<ul>
														<li>
															<a href="/game-judgmental-training-software/">Game – Judgmental Training Software (JTS)</a>
														</li>
														<li>
															<a href="/game-close-quarters-combat-c-q-c/">Game – Close Quarters Combat (C.Q.C)</a>
														</li>
														<li>
															<a href="/games-practical-shooting/">Games – Practical Shooting</a>
														</li>
														<li>
															<a href="/game-pro-shooting-challenge-1-5/">Game – Pro Shooting Challenge 1-5</a>
														</li>
														<li>
															<a href="/game-skill-drills-1-3/">Game – Skill Drills 1-3</a>
														</li>
														<li>
															<a href="/games-steel-challenge/">Games – Steel Challenge</a>
														</li>
													</ul>
												</li>
												<?php } ?>
											</ul>
										</li>
										<li class="store-button"><a href="<?php if(ICL_LANGUAGE_CODE == "fr"){ ?>/fr/boutique/<?php } else { ?>/shop/<?php }; ?>"><?php if(ICL_LANGUAGE_CODE == "fr"){ ?>Boutique<?php } else { ?>Store<?php }; ?></a>
											<ul class="store-menu">
												<li>
													<a href="<?php if(ICL_LANGUAGE_CODE == "fr"){ ?>/fr/categorie-produit/armes-a-feu/<?php } else { ?>/product-category/firearms/<?php }; ?>">
														<span class="store-menu-cat-title"><?php if(ICL_LANGUAGE_CODE == "fr"){ ?>Armes a feu<?php } else { ?>Firearms<?php }; ?></span>
														<img src="<?php echo (get_field('firearms', 'option')?get_field('firearms', 'option'):'/wp-content/uploads/2018/07/store-menu-firearms-img.jpg'); ?>" alt="Firearms" height="" width="">
													</a>
													<?php if(ICL_LANGUAGE_CODE == "fr"){ ?>
														<a href="/fr/categorie-produit/armes-a-feu/pistolet-svi/">Pistolet SVI</a>
														<a href="/fr/categorie-produit/armes-a-feu/pistolets-fr-2/">Pistolets</a>
														<a href="/fr/categorie-produit/armes-a-feu/carabines-fr/">Carabines</a>
														<a href="/fr/categorie-produit/armes-a-feu/fusils-fr/">Fusils</a>
														<a href="/fr/categorie-produit/armes-a-feu/revolver-fr/">Revolver</a>
														<a href="/fr/categorie-produit/armes-a-feu/armes-a-feu-usagees/">Armes à Feu Usagées</a>
														<a href="/fr/categorie-produit/armes-a-feu/chargeur-de-pistolet/">Chargeur de Pistolet</a>
														<a href="/fr/categorie-produit/armes-a-feu/chargeur-de-carabines/">Chargeur de Carabines</a>
														<a href="/fr/categorie-produit/armes-a-feu/chargeur-de-pistolet-svi/">Chargeur de Pistolet SVI</a>
													<?php }else{ ?>
														<a href="/product-category/firearms/svi-firearms/">SVI Firearms</a>
														<a href="/product-category/firearms/handguns/">Handguns</a>
														<a href="/product-category/firearms/rifles/">Rifles</a>
														<a href="/product-category/firearms/shotguns/">Shotguns</a>
														<a href="/product-category/firearms/revolver/">Revolver</a>
														<a href="/product-category/firearms/used-firearms/">Used Firearms (Pre-Owned)</a>
														<a href="/product-category/firearms/handgun-magazines/">Handgun Magazines</a>
														<a href="/product-category/firearms/rifle-magazine/">Rifle Magazine</a>
														<a href="/product-category/firearms/svi-magazines/">SVI Magazines</a>
													<?php } ?>
												</li>
												<li>
													<a href="<?php if(ICL_LANGUAGE_CODE == "fr"){ ?>/fr/categorie-produit/muniton/<?php } else { ?>/product-category/ammunition/<?php }; ?>">
														<span class="store-menu-cat-title"><?php if(ICL_LANGUAGE_CODE == "fr"){ ?>Munition<?php } else { ?>Ammunition<?php }; ?></span>
														<img src="<?php echo (get_field('ammunition', 'option')?get_field('ammunition', 'option'):'/wp-content/uploads/2018/07/store-menu-ammunition-img.jpg'); ?>" alt="Ammunition" height="" width="">
													</a>
													<?php if(ICL_LANGUAGE_CODE == "fr"){ ?>
														<a href="/fr/categorie-produit/muniton/carabines/">Carabines</a>
														<a href="/fr/categorie-produit/muniton/fusils/">Fusils</a>
														<a href="/fr/categorie-produit/muniton/pistolets/">Pistolets</a>
														<a href="/fr/categorie-produit/muniton/projectiles-fr/">Projectiles</a>
														<a href="/fr/categorie-produit/muniton/revolvers/">Revolvers</a>
													<?php }else{ ?>
														<a href="/product-category/ammunition/handgun/">Handgun</a>
														<a href="/product-category/ammunition/projectiles/">Projectiles</a>
														<a href="/product-category/ammunition/revolver-2/">Revolver</a>
														<a href="/product-category/ammunition/rifle/">Rifle</a>
														<a href="/product-category/ammunition/shotgun/">Shotgun</a>
													<?php } ?>
												</li>
												<li>
													<a href="<?php if(ICL_LANGUAGE_CODE == "fr"){ ?>/fr/categorie-produit/optiques-et-lampes-de-poche/<?php } else { ?>/product-category/optics-flashlights/<?php }; ?>">
														<span class="store-menu-cat-title"><?php if(ICL_LANGUAGE_CODE == "fr"){ ?>Optiques et Lampes de poche<?php } else { ?>Optics & Flashlights<?php }; ?></span>
														<img src="<?php echo (get_field('optics_flashlights', 'option')?get_field('optics_flashlights', 'option'):'/wp-content/uploads/2018/07/store-menu-optics-img.jpg'); ?>" alt="Optics & Flashlights" height="" width="">
													</a>
													<?php if(ICL_LANGUAGE_CODE == "fr"){ ?>
														<a href="/fr/categorie-produit/optiques-et-lampes-de-poche/jumelles/">Jumelles</a>
														<a href="/fr/categorie-produit/optiques-et-lampes-de-poche/lampes-de-poche/">Lampes de poche</a>
														<a href="/fr/categorie-produit/optiques-et-lampes-de-poche/lasers-fr/">Lasers</a>
														<a href="/fr/categorie-produit/optiques-et-lampes-de-poche/loupes/">Loupes</a>
														<a href="/fr/categorie-produit/optiques-et-lampes-de-poche/montures-et-anneaux/">Montures et Anneaux</a>
														<a href="/fr/categorie-produit/optiques-et-lampes-de-poche/rails-fr/">Rails</a>
														<a href="/fr/categorie-produit/optiques-et-lampes-de-poche/telescope-mires/">Téléscope &amp; Mires</a>
													<?php }else{ ?>
														<a href="/product-category/optics-flashlights/binoculars/">Binoculars</a>
														<a href="/product-category/optics-flashlights/flashlights/">Flashlights</a>
														<a href="/product-category/optics-flashlights/lasers/">Lasers</a>
														<a href="/product-category/optics-flashlights/magnifiers/">Magnifiers</a>
														<a href="/product-category/optics-flashlights/mounts-rings/">Mounts &amp; Rings</a>
														<a href="/product-category/optics-flashlights/rails/">Rails</a>
														<a href="/product-category/optics-flashlights/scopes-sights/">Scopes &amp; Sights</a>
													<?php } ?>
												</li>
												<li>
													<a href="<?php if(ICL_LANGUAGE_CODE == "fr"){ ?>/fr/categorie-produit/pieces-accessoires/<?php } else { ?>/product-category/parts-accessories/<?php }; ?>">
														<span class="store-menu-cat-title"><?php if(ICL_LANGUAGE_CODE == "fr"){ ?>Pièces  Accessoires<?php } else { ?>Parts  Accessories<?php }; ?></span>
														<img src="<?php echo (get_field('parts_accessories', 'option')?get_field('parts_accessories', 'option'):'/wp-content/uploads/2018/07/store-menu-parts-img.jpg'); ?>" alt="Parts & Accessories" height="" width="">
													</a>
													<?php if(ICL_LANGUAGE_CODE == "fr"){ ?>
														<a href="/fr/categorie-produit/pieces-accessoires/accessoires-de-carabine/">Accessoires de Carabine</a>
														<a href="/fr/categorie-produit/pieces-accessoires/accessoires-de-fusils/">Accessoires de Fusils</a>
														<a href="/fr/categorie-produit/pieces-accessoires/accessoires-de-nettoyage/">Accessoires de nettoyage</a>
														<a href="/fr/categorie-produit/pieces-accessoires/accessoires-de-pistolets/">Accessoires de Pistolets</a>
														<a href="/fr/categorie-produit/pieces-accessoires/pieces-2-alpha/">Pièces 2 Alpha</a>
														<a href="/fr/categorie-produit/pieces-accessoires/pieces-ar-10-15/">Pièces AR-10/15</a>
														<a href="/fr/categorie-produit/pieces-accessoires/pieces-cz/">Pièces CZ</a>
														<a href="/fr/categorie-produit/pieces-accessoires/pieces-glock/">Pièces Glock</a>
														<a href="/fr/categorie-produit/pieces-accessoires/pieces-svi/">Pièces SVI</a>
													<?php }else{ ?>
														<a href="/product-category/parts-accessories/2-alpha-parts/">2 Alpha Parts</a>
														<a href="/product-category/parts-accessories/ar-10-15-parts/">AR-10/15 Parts</a>
														<a href="/product-category/parts-accessories/cleaning-parts/">Cleaning Parts</a>
														<a href="/product-category/parts-accessories/cz-parts/">CZ Parts</a>
														<a href="/product-category/parts-accessories/glock-parts/">Glock Parts</a>
														<a href="/product-category/parts-accessories/handgun-parts/">Handgun Parts</a>
														<a href="/product-category/parts-accessories/rifle-accessories/">Rifle Accessories</a>
														<a href="/product-category/parts-accessories/shotgun-accessories/">Shotgun Accessories</a>
														<a href="/product-category/parts-accessories/svi-parts/">SVI Parts</a>
													<?php } ?>
												</li>
												<li>
													<a href="<?php if(ICL_LANGUAGE_CODE == "fr"){ ?>/fr/categorie-produit/accessoires-de-competition/<?php } else { ?>/product-category/competitive-accessories/<?php }; ?>">
														<span class="store-menu-cat-title"><?php if(ICL_LANGUAGE_CODE == "fr"){ ?>Accessoires de Compétition<?php } else { ?>Competitive Accessories<?php }; ?></span>
														<img src="<?php echo (get_field('competitive_accessories', 'option')?get_field('competitive_accessories', 'option'):'/wp-content/uploads/2018/07/store-menu-competitive-img.jpg'); ?>" alt="Competitive Accessories" height="" width="">
													</a>
													<?php if(ICL_LANGUAGE_CODE == "fr"){ ?>
														<a href="/fr/categorie-produit/accessoires-de-competition/ceintures/">Ceintures</a>
														<a href="/fr/categorie-produit/accessoires-de-competition/cibles/">Cibles</a>
														<a href="/fr/categorie-produit/accessoires-de-competition/etuis/">Étuis</a>
														<a href="/fr/categorie-produit/accessoires-de-competition/porte-chargeurs/">Porte-chargeurs</a>
														<a href="/fr/categorie-produit/accessoires-de-competition/protections-visuelles-auditives/">Protections Visuelles/Auditives</a>
														<a href="/fr/categorie-produit/accessoires-de-competition/sacs-de-competition/">Sacs de Compétition</a>
														<a href="/fr/categorie-produit/accessoires-de-competition/speed-timer-fr/">Speed Timer</a>
													<?php }else{ ?>
														<a href="/product-category/competitive-accessories/belts/">Belts</a>
														<a href="/product-category/competitive-accessories/competition-bags/">Competition Bags</a>
														<a href="/product-category/competitive-accessories/eye-ear-protection/">Eye/Ear Protection</a>
														<a href="/product-category/competitive-accessories/holsters/">Holsters</a>
														<a href="/product-category/competitive-accessories/magazine-pouches/">Magazine Pouches</a>
														<a href="/product-category/competitive-accessories/speed-timer/">Speed Timer</a>
														<a href="/product-category/competitive-accessories/targets/">Targets</a>
													<?php } ?>
												</li>
												<li>
													<a href="<?php if(ICL_LANGUAGE_CODE == "fr"){ ?>/fr/categorie-produit/equipement-de-rechargement/<?php } else { ?>/product-category/reloading-equipment/<?php }; ?>">
														<span class="store-menu-cat-title"><?php if(ICL_LANGUAGE_CODE == "fr"){ ?>Équipement de Rechargement<?php } else { ?>Reloading Equipment<?php }; ?></span>
														<img src="<?php echo (get_field('reloading_equipment', 'option')?get_field('reloading_equipment', 'option'):'/wp-content/uploads/2018/07/store-menu-reloading-img.jpg'); ?>" alt="Reloading Equipment" height="" width="">
													</a>
													<?php if(ICL_LANGUAGE_CODE == "fr"){ ?>
														<a href="/fr/categorie-produit/equipement-de-rechargement/accessoires/">Accessoires</a>
														<a href="/fr/categorie-produit/equipement-de-rechargement/chronographes/">Chronographes</a>
														<a href="/fr/categorie-produit/equipement-de-rechargement/livres-et-dvd/">Livres et DVD</a>
														<a href="/fr/categorie-produit/equipement-de-rechargement/machines-fr/">Machines</a>
														<a href="/fr/categorie-produit/equipement-de-rechargement/pieces/">Pièces</a>
														<a href="/fr/categorie-produit/equipement-de-rechargement/poudres-et-amorces/">Poudres et Amorces</a>
													<?php }else{ ?>
														<a href="/product-category/reloading-equipment/accessories/">Accessories</a>
														<a href="/product-category/reloading-equipment/books-dvd/">Books &amp; DVD</a>
														<a href="/product-category/reloading-equipment/chronographs/">Chronographs</a>
														<a href="/product-category/reloading-equipment/components/">Components</a>
														<a href="/product-category/reloading-equipment/machines/">Machines</a>
														<a href="/product-category/reloading-equipment/powder-primers/">Brass, Powder, &amp; Primers</a>
													<?php } ?>
												</li>
												<li>
													<a href="<?php if(ICL_LANGUAGE_CODE == "fr"){ ?>/fr/categorie-produit/Peche-chasse/<?php } else { ?>/product-category/fishing-hunting/<?php }; ?>">
														<span class="store-menu-cat-title"><?php if(ICL_LANGUAGE_CODE == "fr"){ ?>Pêche & Chasse<?php } else { ?>
															Fishing & Hunting<?php }; ?></span>
														<img src="<?php echo (get_field('fishing_and_hunting', 'option')?get_field('fishing_and_hunting', 'option'):'/wp-content/uploads/2022/08/fish-hun.png'); ?>" alt="Fishing and Hunting" height="" width="">
													</a>
													<?php if(ICL_LANGUAGE_CODE == "fr"){ ?>		
													    <a href="/fr/categorie-produit/divers/chasse/">Chasse</a>
													     <a href="/fr/categorie-produit/divers/peche/">Pêches</a>
														 <a href="/fr/categorie-produit/divers/survie/">Survies</a>	
													<?php }else{ ?>
													    <a href="/product-category/miscellaneous/hunting/">Hunting</a>
														<a href="/product-category/miscellaneous/fishing/">Fishing</a>
														<a href="/product-category/miscellaneous/survival/">Survivals</a>
													<?php } ?>
												</li>
													
												<li>
													<a href="<?php if(ICL_LANGUAGE_CODE == "fr"){ ?>/fr/categorie-produit/divers/<?php } else { ?>/product-category/miscellaneous/<?php }; ?>">
														<span class="store-menu-cat-title"><?php if(ICL_LANGUAGE_CODE == "fr"){ ?>Divers<?php } else { ?>Miscellaneous<?php }; ?></span>
												<img src="<?php echo (get_field('miscellaneous', 'option')?get_field('miscellaneous', 'option'):'/wp-content/uploads/2018/07/store-menu-misc-img.jpg'); ?>" alt="Miscellaneous" height="" width="">
													</a>
													<?php if(ICL_LANGUAGE_CODE == "fr"){ ?>
														<a href="/fr/categorie-produit/divers/autocollants/">Autocollants</a>
														<a href="/fr/categorie-produit/liquidation/">Liquidations</a>
														<a href="/fr/categorie-produit/divers/coffres-forts/">Coffres-Forts</a>
														<a href="/fr/categorie-produit/divers/couteaux/">Couteaux</a>
														<a href="/fr/categorie-produit/divers/piles/">Piles</a>
														<a href="/fr/categorie-produit/divers/valises-de-transport/">Valises de transport</a>
														<a href="/fr/categorie-produit/divers/vest-pare-balles/">Vest Pare-balles</a>           					                                    <a href="/fr/categorie-produit/divers/mre/">MRE</a>
														<a href="/fr/categorie-produit/divers/vetements/">Vêtements</a>
													<?php }else{ ?>
														<a href="/product-category/miscellaneous/batteries/">Batteries</a>
														<a href="/product-category/miscellaneous/clothing/">Clothing</a>
														<a href="/product-category/miscellaneous/gun-cases/">Gun Cases &amp; Bags</a>
														<a href="/product-category/miscellaneous/knives/">Knives</a>
														<a href="/product-category/miscellaneous/safes/">Safes</a>
														<a href="/product-category/miscellaneous/stickers/">Stickers</a>
													
														<a href="/product-category/miscellaneous/vests-body-armour/">Vests &amp; Body Armour</a>
														<a href="/product-category/miscellaneous/mre/">MRE</a>
												
													<?php } ?>
													
													<a href="<?php if(ICL_LANGUAGE_CODE == "fr"){ ?>/fr/categorie-produit/liquidation/<?php } else { ?>/product-category/clearance/<?php }; ?>" style="color: #ff4343 !important; font-weight: 600 !important;"><?php if(ICL_LANGUAGE_CODE == "fr"){ ?>Liquidation<?php } else { ?>Clearance<?php }; ?></a>
												</li>
												<?php /*<!--<li>
													<a href="<?php if(ICL_LANGUAGE_CODE == "fr"){ ?>#<?php } else { ?>#<?php }; ?>">
														<span class="store-menu-cat-title"><?php if(ICL_LANGUAGE_CODE == "fr"){ ?>Promotions<?php } else { ?>Promotions<?php }; ?></span>
														<img src="<?php echo (get_field('promotions', 'option')?get_field('promotions', 'option'):'/wp-content/uploads/2018/07/store-menu-promotions-img.jpg'); ?>" alt="Promotions" height="" width="">
													</a>
													
													<a href="<?php if(ICL_LANGUAGE_CODE == "fr"){ ?>#<?php } else { ?>#<?php }; ?>"><?php if(ICL_LANGUAGE_CODE == "fr"){ ?>Catégorie temporaire<?php } else { ?>Temporary Category<?php }; ?></a>
													<a href="<?php if(ICL_LANGUAGE_CODE == "fr"){ ?>#<?php } else { ?>#<?php }; ?>"><?php if(ICL_LANGUAGE_CODE == "fr"){ ?>Catégorie temporaire<?php } else { ?>Temporary Category<?php }; ?></a>
													<a href="<?php if(ICL_LANGUAGE_CODE == "fr"){ ?>#<?php } else { ?>#<?php }; ?>"><?php if(ICL_LANGUAGE_CODE == "fr"){ ?>Catégorie temporaire<?php } else { ?>Temporary Category<?php }; ?></a>
													<a href="<?php if(ICL_LANGUAGE_CODE == "fr"){ ?>#<?php } else { ?>#<?php }; ?>"><?php if(ICL_LANGUAGE_CODE == "fr"){ ?>Catégorie temporaire<?php } else { ?>Temporary Category<?php }; ?></a>
													<a href="<?php if(ICL_LANGUAGE_CODE == "fr"){ ?>#<?php } else { ?>#<?php }; ?>"><?php if(ICL_LANGUAGE_CODE == "fr"){ ?>Catégorie temporaire<?php } else { ?>Temporary Category<?php }; ?></a>
													<a href="<?php if(ICL_LANGUAGE_CODE == "fr"){ ?>#<?php } else { ?>#<?php }; ?>"><?php if(ICL_LANGUAGE_CODE == "fr"){ ?>Catégorie temporaire<?php } else { ?>Temporary Category<?php }; ?></a>
												</li>-->*/ ?>
											</ul>
										</li>
									</ul>		
								</nav>
							</div>
							<div class="dist_header_search">
								<?php if(ICL_LANGUAGE_CODE == "fr"){ ?>
									<?php echo str_replace('<input type="text"', '<input type="hidden" name="post_type" value="product"><input type="hidden" name="lang" value="fr"><input type="text"', str_replace("Search Here", "Rechercher", get_search_form(false))); ?>
								<?php } else { ?>
									<?php echo str_replace('<input type="text"', '<input type="hidden" name="post_type" value="product"><input type="hidden" name="lang" value="en"><input type="text"', get_search_form(false)); ?>
								<?php }; ?>
							</div>
							<?php if($centered_logo) { ?>
								<div class="header_inner_right">
									<div class="side_menu_button_wrapper right">
										<?php if(is_active_sidebar('header_bottom_right')) { ?>
											<div class="header_bottom_right_widget_holder"><?php dynamic_sidebar('header_bottom_right'); ?></div>
										<?php } ?>
										<?php if(is_active_sidebar('woocommerce_dropdown')) {
											dynamic_sidebar('woocommerce_dropdown');
										} ?>
										<div class="side_menu_button">
											<?php echo qode_get_module_template_part('templates/search/search-button', 'header', '', $params); ?>
											<?php echo qode_get_module_template_part('templates/popup-menu/popup-menu-button', 'header', '', $params); ?>
											<?php echo qode_get_module_template_part('templates/side-area/side-menu-button-link', 'header', '', $params); ?>
										</div>
									</div>
								</div>
							<?php } ?>
							<?php echo qode_get_module_template_part('templates/mobile-menu/mobile-menu', 'header', '', $params); ?>
							<?php if($header_in_grid){ ?>
							<?php if($overlapping_content) {?></div><?php } ?>
						</div>
					</div>
					<?php } ?>
				</div>
			</div>
		</div>

    <?php if (isset($events) && !empty($events)): ?>
        <div class="carousel-alert-parent">
            <div class="alert-calendar">
                <a
                    href="<?php echo ICL_LANGUAGE_CODE == 'fr' ? '/fr/calendar/' : '/calendar/'; ?>"
                    title="<?php echo ICL_LANGUAGE_CODE == 'fr' ? 'Calendrier' : 'Calendar'; ?>"
                >
                    <img
                        src="/wp-content/themes/bridge-child/img/alert-calendar.png"
                        height="58" width="54"
                        alt="<?php echo ICL_LANGUAGE_CODE == 'fr' ? 'Calendrier' : 'Calendar'; ?>"
                    >
                </a>
            </div>

            <div class="owl-carousel carousel-alert">
                <?php foreach ($events as $event): /** @var $event WP_Post */?>
                    <div class="item">
                        <div>
                            <div>
                                <div>
                                    <a href="<?php echo $event->guid; ?>" title="<?php echo $event->post_title; ?>">
                                        <strong><?php echo $event->post_title; ?></strong>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
            <script>
                var item_count = parseInt(jQuery(".carousel-alert").find('.item').length);
                jQuery('.carousel-alert').owlCarousel({
                    loop: true,
                    nav: true,
                    dots: true,
                    autoplay: true,
                    autoplayTimeout: 10000,
                    smartSpeed: 1000,
                    mouseDrag: true,
                    touchDrag: true,
                    items: 1,
                    animateOut: 'fadeOut',
                    onInitialize: function (event) {
                        if (item_count <= 1) {
                            this.options.loop = false;
                            this.options.dots = false;
                            this.options.nav = false;
                            this.options.mouseDrag = false;
                            this.options.touchDrag = false;
                        } else {
                            this.options.loop = true;
                            this.options.dots = true;
                            this.options.nav = true;
                            this.options.mouseDrag = true;
                            this.options.touchDrag = true;
                        }
                    },

                });
            </script>
            <button class="close-alert">×</button>
        </div>
    <?php endif; ?>
    <?php wp_reset_query(); ?>

    <div id="social-sidebar">
        <a itemprop="url" href="https://www.facebook.com/crafm/" target="_blank">
            <i class="fab fa-facebook-f"></i>
        </a>
        <a itemprop="url" href="https://twitter.com/CRAFMontreal" target="_blank">
            <i class="fab fa-twitter"></i>
        </a>
        <a itemprop="url" href="https://www.pinterest.ca/crafm2206/" target="_blank">
            <i class="fab fa-pinterest-p"></i>
        </a>
    </div>
</header>




