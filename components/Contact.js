var Contact = React.createClass({
	propTypes: {
		item: React.PropTypes.object.isRequired,
	},

	render: function() {
		return (
			<div className={'contactItem'}>
				<img className={'contactImage'} src={'https://www.shareicon.net/data/128x128/2015/08/23/89482_contact_512x512.png'}/>
				<p className={'contactLabel'}>
					Imię: {this.props.item.firstName}
				<p className={'contactLabel'}>
					Nazwisko: {this.props.item.lastName}
				<a href={'mailto:' + this.props.item.email}>
					{this.props.item.email}
				</a>
			</div>
});