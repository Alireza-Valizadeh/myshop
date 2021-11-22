CREATE PROCEDURE [dbo].[Register] 
@name varchar(35),
@family varchar(35)
,@email varchar(70)
,@password varchar(70)
,@gender int
,@stateCode int
,@zipCode char(10)

AS
BEGIN
	IF EXISTS (SELECT ID FROM Users WHERE Email=@email) SELECT -1 as BackStatus
	ELSE 
	INSERT INTO Users (
	[Name],
	[Family],
	[Email],
	[Password],
	[Gender],
	[StateCode],
	[ZipCode],
	[JoinedAt]
	) VALUES (
		@name,
		@family,
		@email,
		@password
		,@gender
		,@stateCode
		,@zipCode
		,GETDATE()
	)
	SELECT 1 as BackStatus
END

CREATE PROCEDURE [dbo].[Profile] 
@email varchar(70)

AS
BEGIN
	IF NOT EXISTS (SELECT ID FROM Users WHERE Email=@email) SELECT -1 as BackStatus
	ELSE 
	SELECT name, isnull(email, '') as email, isnull(Family, '') as family, isnull(GenderName, '') as GenderName , 
	isnull(StateName, '') as StateName, isnull(StateCode, '') as StateCode, 
	isnull(Gender, '') as Gender, isnull(ZipCode, '') as ZipCode,  JoinedAt FROM Users
	LEFT OUTER JOIN Gender ON Gender.ID=Users.Gender
	LEFT OUTER JOIN State ON State.ID=Users.StateCode
	Where Email=@email
END

CREATE PROCEDURE [dbo].[Login] 
@email varchar(70)

AS
BEGIN
	IF NOT EXISTS (SELECT ID FROM Users WHERE Email=@email) SELECT -1 as BackStatus
	ELSE 
	SELECT * FROM  Users WHERE Email=@email
END
CREATE PROCEDURE [dbo].[UpdateProfile] 
@name varchar(35)
,@family varchar(35)
,@email varchar(70)
,@password varchar(70)
,@gender int
,@stateCode int
,@zipCode char(10)
AS
BEGIN
	IF NOT EXISTS (SELECT ID FROM Users WHERE Email=@email) SELECT -1 as BackStatus
	ELSE 
	UPDATE Users SET 
	Name=@name,
	Family=@family,
	Password=@password,
	Gender=@gender,
	StateCode=@stateCode,
	ZipCode=@zipCode
	Where Email=@email
END