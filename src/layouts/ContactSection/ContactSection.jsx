import "./contact-section.scss";

export default () => {
	return (
		<section className="section contact-section" id="contact-section">
			<div className="container contact-section__container">
				<div className="contact-section__content">
					<h2 className="contact-section__title title-2">Нужна помощь?</h2>
					<p className="contact-section__text">
						Оставьте ваши контактные данные. Проконсультируем по всем интересующим вопросам и поможем подобрать климатическую технику
					</p>
					<div className="contact-section__form-box">
						<div
							className="wpcf7 no-js"
							id="wpcf7-f122-o1"
							lang="ru-RU"
							dir="ltr"
							data-wpcf7-id="122"
						>
							<form
								action="/paketti/my-account/#wpcf7-f122-o1"
								method="post"
								className="wpcf7-form invalid"
								aria-label="Контактная форма"
								noValidate
								data-status="invalid"
							>
								<p>
									<span className="wpcf7-form-control-wrap" data-name="text-794">
										<input
											size="40"
											maxLength="400"
											className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required wpcf7-not-valid form-name"
											aria-required="true"
											aria-invalid="true"
											aria-describedby="wpcf7-f122-o1-ve-text-794"
											placeholder="Ваше имя*"
											type="text"
											name="text-794"
											defaultValue=""
										/>
									</span>

									<span className="wpcf7-form-control-wrap" data-name="tel-712">
										<input
											size="40"
											maxLength="400"
											className="wpcf7-form-control wpcf7-tel wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-tel wpcf7-not-valid form-phone"
											aria-required="true"
											aria-invalid="true"
											aria-describedby="wpcf7-f122-o1-ve-tel-712"
											placeholder="Телефон*"
											type="tel"
											name="tel-712"
											defaultValue=""
										/>
									</span>

									<span className="wpcf7-form-control-wrap" data-name="acceptance-65">
										<span className="wpcf7-form-control wpcf7-acceptance optional">
											<span className="wpcf7-list-item">
												<label>
													<input
														type="checkbox"
														name="acceptance-65"
														value="1"
														className="form-acceptance"
														aria-invalid="false"
													/>
													<span className="wpcf7-list-item-label">
														Согласен(а) на обработку <a href="#">персональных данных</a>
													</span>
												</label>
											</span>
										</span>
									</span>

									<input
										className="wpcf7-form-control wpcf7-submit has-spinner form-btn"
										type="submit"
										value="Отправить"
									/>
								</p>
							</form>
						</div>

					</div>
				</div>
				<div className="image-box contact-section__image-box" aria-hidden="true">
					<img src="images/contacts.png" alt="Контакты" />
				</div>
			</div>
		</section>
	)
}
